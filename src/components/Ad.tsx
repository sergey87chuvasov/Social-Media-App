import Image from 'next/image';

const Ad = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      <div className='flex items-center justify-between text-gray-500 font-medium'>
        <span>Sponsored Ads</span>
        <Image src='/more.png' alt='icon pic' width={16} height={16} />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}
      >
        <div
          className={`relative w-full ${
            size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'
          }`}
        >
          <Image
            src='https://images.pexels.com/photos/6673571/pexels-photo-6673571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img pic'
            fill
            className='rounded-lg object-cover'
          />
        </div>
        <div className='flex items-center gap-4'>
          <Image
            src='https://images.pexels.com/photos/6673571/pexels-photo-6673571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img pic'
            className='rounded-full w-6 h-6 object-cover'
            width={24}
            height={24}
          />
          <span className='text-blue-500 font-medium'>BigChef Lounge</span>
        </div>
        <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
          {size === 'sm'
            ? 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
            : size === 'md'
            ? 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporistenetur dignissimos harum sunt expedita'
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non nihil eligendi in. Modi quia culpa quae voluptatibus totam alias nobis nulla excepturi dolores, harum non fugiat mollitia ipsam perferendis!'}
        </p>
        <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
