import { useMutation, useQuery } from "@apollo/client"
import { useContext } from "react";
import { CreateLikesMutation, CreateLikesMutationVariables, DeleteLikesMutation, DeleteLikesMutationVariables, LikesForPostByUserQuery, LikesForPostByUserQueryVariables, Posts, UpdatePostsMutation, UpdatePostsMutationVariables } from "../../API";
import { createLikes, deleteLikes } from "../../components/likesMutation";
import { likesForPostByUser } from "../../components/likesqueries";
import { updatePosts } from "../../components/postqueries";
import { AuthContext } from "../../context/AuthContext";

const useLikeService =(data:Posts) =>{
  
const {userId}= useContext(AuthContext)

const { data: userLikeData } = useQuery<
LikesForPostByUserQuery,
LikesForPostByUserQueryVariables
>(likesForPostByUser, {
variables: { postsID: data.id, userID: { eq: userId } },
});

const userLike = (userLikeData?.LikesForPostByUser?.items || []).filter(
    (like) => !like?._deleted
  )?.[0];

    const [doCreateLikes] = useMutation<
    CreateLikesMutation,
    CreateLikesMutationVariables
  >(createLikes,{
    variables: { input: { userID: userId, postsID: data.id } },
    refetchQueries: ["LikesForPostByUser"],
  });

  const [doDeleteLikes] = useMutation<
    DeleteLikesMutation,
    DeleteLikesMutationVariables
  >(deleteLikes);

    const [doUpdatePost] = useMutation<
    UpdatePostsMutation,
    UpdatePostsMutationVariables
  >(updatePosts);


    const onAddLike=()=>{
        doCreateLikes();
        incrementNofLikes(1)
    }
    const onDeleteLike=()=>{
        if(!userLike){
        return;    
        }
        doDeleteLikes({
            variables: {
              input: { id: userLike?.id, _version: userLike?._version },
            },
          });
          incrementNofLikes(-1)
    }

    const incrementNofLikes = (amount: 1 | -1) => {
        doUpdatePost({
          variables: {
            input: {
              id: data.id,
              _version: data._version,
              nOfLikes: data.nOfLikes + amount,
            },
          },
        });
      };

    const toggleLike=()=>{
        if(!userLike){
            onAddLike()
        }else{
            onDeleteLike()
        }
    }
    
    return{
        
        toggleLike,
        isLiked:!! userLike
}


}
export default useLikeService