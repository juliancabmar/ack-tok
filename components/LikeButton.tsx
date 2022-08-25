import React, {useState, useEffect} from 'react'
import { MdFavorite } from 'react-icons/md';

import useAuthStore from '../store/authStore';

const LikeButton = () => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile } = useAuthStore();

  return (
    <div>
      LikeButton
    </div>
  )
}

export default LikeButton
