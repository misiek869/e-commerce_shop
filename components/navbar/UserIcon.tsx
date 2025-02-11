import { CiUser } from 'react-icons/ci'
import { currentUser } from '@clerk/nextjs/server'

const UserIcon = async () => {
	const user = await currentUser()

	const profileImage = user?.imageUrl

	if (profileImage) {
		return (
			<img
				src={profileImage}
				alt='profile image'
				className='w-6 h-6 rounded-full object-cover'
			/>
		)
	}

	return <CiUser className='w-6 h-6 rounded-full text-white' />
}

export default UserIcon
