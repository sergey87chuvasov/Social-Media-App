import Image from 'next/image';

const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      <Image
        width={48}
        height={48}
        src='https://images.pexels.com/photos/13793266/pexels-photo-13793266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='img pic'
        className='w-12 h-12 object-cover rounded-full'
      />
      <div className='flex-1'>
        <div className='flex gap-4'>
          <textarea
            placeholder='What is on your mind?'
            className='flex-1 bg-slate-100 rounded-lg p-2'
          ></textarea>
          <Image
            width={20}
            height={20}
            src='/emoji.png'
            alt='img pic'
            className='w-5 h-5 cursor-pointer self-end'
          />
        </div>
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image width={20} height={20} src='/addimage.png' alt='img pic' />
            Photo
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image width={20} height={20} src='/addVideo.png' alt='img pic' />
            Video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image width={20} height={20} src='/addevent.png' alt='img pic' />
            Event
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image width={20} height={20} src='/poll.png' alt='img pic' />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
