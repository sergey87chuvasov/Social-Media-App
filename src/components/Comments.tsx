import Image from 'next/image';

const Comments = () => {
  return (
    <div className=''>
      <div className='flex items-center gap-4'>
        <Image
          src='https://images.pexels.com/photos/10254044/pexels-photo-10254044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='img pic'
          width={32}
          height={32}
          className='w-8 h-8 rounded-full'
        />
        <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
          <input
            type='text'
            placeholder='Write a comment ...'
            className='bg-transparent outline-none flex-1'
          />
          <Image
            src='/emoji.png'
            alt='icon pic'
            width={16}
            height={16}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className=''>
        <div className='flex gap-4 justify-between mt-6'>
          <Image
            src='https://images.pexels.com/photos/10254044/pexels-photo-10254044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img pic'
            width={40}
            height={40}
            className='w-10 h-10 rounded-full'
          />
          <div className='flex flex-col gap-2 flex-1'>
            <span className='font-medium'>Anna Chu</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              odit quas modi dolorum nobis laudantium, nulla natus corporis
              repellendus laboriosam, praesentium velit nostrum omnis aut
              consequatur eius sit maiores aperiam.
            </p>
            <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
              <div className='flex items-center gap-4'>
                <Image
                  src='/like.png'
                  alt='icon pic'
                  width={12}
                  height={12}
                  className='cursor-pointer w-4 h-4'
                />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>32 Likes</span>
              </div>
              <div className=''>Reply</div>
            </div>
          </div>
          <Image
            src='/more.png'
            alt='icon pic'
            width={16}
            height={16}
            className='cursor-pointer w-4 h-4'
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
