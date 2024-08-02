import Image from 'next/image';
import Link from 'next/link';

const FriendRequests = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>Friends Requests</span>
        <Link className='text-blue-500 text-xs' href='/'>
          See All
        </Link>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/9796842/pexels-photo-9796842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img pic'
            className='w-10 h-10 rounded-full object-cover'
            width={40}
            height={40}
          />
          <span className='font-semibold'>Tom Deal</span>
        </div>
        <div className='flex gap-3 justify-end'>
          <Image
            src='/accept.png'
            alt='icon pic'
            width={20}
            height={20}
            className='cursor-pointer'
          />
          <Image
            src='/reject.png'
            alt='icon pic'
            width={20}
            height={20}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/9796842/pexels-photo-9796842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img pic'
            className='w-10 h-10 rounded-full object-cover'
            width={40}
            height={40}
          />
          <span className='font-semibold'>Joel Mad</span>
        </div>
        <div className='flex gap-3 justify-end'>
          <Image
            src='/accept.png'
            alt='icon pic'
            width={20}
            height={20}
            className='cursor-pointer'
          />
          <Image
            src='/reject.png'
            alt='icon pic'
            width={20}
            height={20}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/9796842/pexels-photo-9796842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img pic'
            className='w-10 h-10 rounded-full object-cover'
            width={40}
            height={40}
          />
          <span className='font-semibold'>Vera Hlo</span>
        </div>
        <div className='flex gap-3 justify-end'>
          <Image
            src='/accept.png'
            alt='icon pic'
            width={20}
            height={20}
            className='cursor-pointer'
          />
          <Image
            src='/reject.png'
            alt='icon pic'
            width={20}
            height={20}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
