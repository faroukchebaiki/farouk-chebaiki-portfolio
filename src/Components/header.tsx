import ArrowCircleLeft  from '@/Components/backArrow';

interface HeaderProps {
    pagename: string;
  }
  const Header: React.FC<HeaderProps> = ({ pagename }) => {
  return (
    <header
      className="relative flex items-center justify-center space-between h-[4rem] border-b-1 border-[#5BD124]"
    >
    <div className='ml-4 mr-auto'>
        <ArrowCircleLeft size={50} color="#5BD124"/>
    </div>
    <div className='absolute left-1/2 transform -translate-x-1/2' >
      <h1 className='text-3xl font-semibold text-[#5BD124]'>{pagename}</h1>
    </div>
    </header>
  );
};
export default Header;
