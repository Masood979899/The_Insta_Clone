import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comments from './Comments';
import {IPost} from '../types/models';
import ImageCarousel from './ImageCarousel';
import VideoPlayer from './VideoPlayer';
import DoublePress from './DoublePress';
import { useNavigation } from '@react-navigation/native';
import { Posts } from '../API';
import { DEFAULT_USER_IMAGE } from '../config';

interface IPostProps {
  data: Posts;
  isVisible: boolean;
 
}

const Post = ({data,isVisible}: IPostProps) => {
  const navigation=useNavigation()
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const onDoublePress = () => {
    setIsLiked(!isLiked);
  };
  let content ;
 
  if (data.image) {
    content = (
      <DoublePress onDoublePress={onDoublePress}>
<Image
        source={{
          uri: data.image,
        }}
        style={styles.postimg}
      />
      </DoublePress>
      
    );
  } else if (data.images) {
    content = <ImageCarousel images={data.images} />;
  } else if (data.video) {
    content = <VideoPlayer uri={data.video} paused={!isVisible} />;
  }
  
  
  

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  const avatar =
    'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png';
  return (
    <>
      {/*header*/}
      <View style={styles.header}>
        <TouchableOpacity 
        onPress={data.User?()=>navigation.navigate("ProfileScreen",{
          userInfo:data?.User,
          // image:data?.user,
        }):()=>{}}
        style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={{uri: data.User?.image || DEFAULT_USER_IMAGE}} style={styles.img} />
        <Text style={styles.name}>{data?.User?.username}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 'auto'}}>
          <Entypo
            name={'dots-three-horizontal'}
            size={16}
            style={styles.dots}
          />
        </TouchableOpacity>
      </View>

      {/*image*/}
      {content}

      {/*footer*/}
      <View style={styles.footer}>
        <TouchableOpacity onPress={onDoublePress}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={isLiked ? '#ED4956' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="send" size={24} style={styles.icon} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 'auto'}}>
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={'black'}
          />
        </TouchableOpacity>
      </View>

      {/*likes */}
      <View style={styles.likes}>
        {/* <Image source={{uri: data.User?.image}} style={styles.avatar} />
        <Image source={{uri: avatar}} style={styles.avatar2} />
        <Image source={{uri: avatar}} style={styles.avatar3} /> */}
          <Text>
            Liked by <Text style={styles.name}>mustafa</Text> and{' '}
            <Text style={styles.name}>{data.nOfLikes} others </Text>{' '}
          </Text>
        
      </View>

      {/*description */}
      <View style={styles.comment_area}>
        <Text numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={{fontWeight: '600', marginLeft: '2.5%',color:"black"}}>
            {data?.User?.username}
          </Text>
          <Text style={styles.caption}> {data.description}</Text>
        </Text>
        <Text onPress={toggleDescriptionExpanded} style={{color: 'grey'}}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>
      </View>

      {/*Comments */}
      <Text onPress={()=>navigation.navigate("Comments")} style={{color: 'grey', marginTop: '2%', marginLeft: '2%',}}>
        view all {data.nOfComments} comments
      </Text>
      {data.Comments?.items||[]?.map((comment) => (comment&&
        <Comments
          data={comment}
          key={comment?.id}
        />
      ))}

      {/*createdAt*/}

      <Text style={{color: 'grey', marginTop: '2%', padding: '2%'}}>
        {data.createdAt}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: '2%',
    paddingTop: '10%',
    alignItems: 'center',
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  name: {
    color: 'black',
    fontSize: 15,
    marginLeft: '2%',
    fontWeight: '600',
  },
  dots: {
    marginLeft: 'auto',
  },
  postimg: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  footer: {
    flexDirection: 'row',
    padding: '1.5%',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: '0.5%',
  },
  icon1: {
    marginLeft: 'auto',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1.5%',
  },
  avatar: {
    height: 20,
    width: 20,
    borderRadius: 15,
  },
  profavatar: {
    height: 35,
    width: 35,
    borderRadius: 15,
  },
  avatar2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    right: 10,
  },
  avatar3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    right: 20,
  },
  caption: {
    fontSize: 15,
    color:"black"
  },
  add_comment: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1.5%',
    borderRadius: 15,
  },
  txt_input: {
    marginHorizontal: '2%',
  },
  comment_area: {
    padding: '2%',
  },
});

export default Post;
