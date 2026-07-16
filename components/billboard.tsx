interface BillboardProps {
  data: {
    label: string;
    imageUrl: string;
  };
}

const Billboard = ({ data }: BillboardProps) => {
  return (
    <div
      className="rounded-xl overflow-hidden"
    
  style={{
    backgroundImage: `url(${data.imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
      
    >
      <div className="h-[500px] md:h-[400px] flex items-center justify-center">
        <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
          {data.label}
        </p>
      </div>
    </div>
  );
};

export default Billboard;