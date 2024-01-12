import { useGetUserValues } from '@/shared/hooks/useGetUserValues'
import Image from 'next/image'
import { UserAvatarContainer } from './UserAvatar.style'

export function UserAvatar() {
  const { userValues } = useGetUserValues()

  return (
    <UserAvatarContainer>
      {userValues?.avatar ? (
        <Image
          src={userValues.avatar}
          alt=""
          width={40}
          height={40}
          className="avatarImage"
        />
      ) : (
        <>{userValues.name.substring(1, 0)}</>
      )}
    </UserAvatarContainer>
  )
}
