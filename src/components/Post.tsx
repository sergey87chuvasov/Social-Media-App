import Image from 'next/image';

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/916960/pexels-photo-916960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img pic'
            className='w-10 h-10 rounded-full'
            width={40}
            height={40}
          />
          <span className='font-medium'>Leo Trossar</span>
        </div>
        <Image src='/more.png' alt='icon pic' width={16} height={16} />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='w-full min-h-96 relative'>
          <Image
            src='https://images.pexels.com/photos/9344084/pexels-photo-9344084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img pic'
            fill
            className='object-cover rounded-md'
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dignissimos necessitatibus vero impedit molestias natus quaerat. At
          qui ut, blanditiis suscipit tempore ipsa illo voluptate, eaque error
          totam labore modi?
        </p>
      </div>
      <div className='flex items-center justify-between text-sm mt-4'>
        <div className='flex gap-8'>
          <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
            <Image
              src='/like.png'
              alt='icon pic'
              width={16}
              height={16}
              className='cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              444 <span className='hidden md:inline'>Likes</span>
            </span>
          </div>
          <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
            <Image
              src='/comment.png'
              alt='icon pic'
              width={16}
              height={16}
              className='cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              211 <span className='hidden md:inline'> Comments</span>
            </span>
          </div>
        </div>
        <div className=''>
          <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
            <Image
              src='/share.png'
              alt='icon pic'
              width={16}
              height={16}
              className='cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              133 <span className='hidden md:inline'> Shares</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
