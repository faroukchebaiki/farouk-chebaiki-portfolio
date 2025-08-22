import ArrowCircleLeft  from '@/Components/Assets/backArrow';

interface HeaderProps {
    pagename: string;
  }
  const Header: React.FC<HeaderProps> = ({ pagename }) => {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-center space-between h-[4rem] border-b border-[#5BD124]
      bg-[rgba(91,209,36,0.12)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[11.8px]"
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

