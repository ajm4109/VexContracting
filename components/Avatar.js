// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none mix-blend-color-burn'>
      <Image
        src={'/new_Vex Black102.png'}
        width={456}
        height={556}
        alt=''
        className='translate-z-0 '
      />
    </div>
  );
};

export default Avatar;
