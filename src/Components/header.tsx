import ArrowCircleLeft  from '@/Components/backArrow';
export default function Header() {
  return (
    <header
      className="relative flex items-center justify-center space-between h-[4rem] border-b-1 border-[#5BD124]"
    >
    <div className='ml-4 mr-auto'>
        <ArrowCircleLeft size={50} color="#5BD124"/>
    </div>
    <div className='absolute left-1/2 transform -translate-x-1/2' >
      <h1 className='text-3xl font-semibold text-[#5BD124]'>Projects</h1>
    </div>
    </header>
  );
};
