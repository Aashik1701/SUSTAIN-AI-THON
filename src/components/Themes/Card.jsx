

const Card = ({img,theme}) => {
  return (
    <div className='flex flex-col align-middle justify-center max-w-[446px] border-2 border-white rounded-lg'>
        <div className='w-full h-[492px] rounded-[32px]'>
            <img src={img} className='w-full h-full'/>
        </div>
        <div className='flex align-middle justify-center'>
            <h3 className='inter-semibold text-xl uppercase'>{theme}</h3>
        </div>
    </div>
  )
}

export default Card
