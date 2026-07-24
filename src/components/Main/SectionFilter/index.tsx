import { Search } from 'lucide-react';

type FilterProps = {
    title: string;
    placeholder?: string;
};

const Filter = ({ title, placeholder }: FilterProps) => {
    return (
        <section className="flex justify-center">
            <div className="w-[680px] h-[112px] mt-10 ">
                <p className=" text-center font-bold text-xl text-primary-blue">
                    {title}
                </p>
                <p className=" text-center text-sm text-primary-blue ">
                    Conteúdo exclusivo todos os dias
                </p>
                <div className="flex justify-center items-center mt-2 gap-3">

                    <input type="text" placeholder={placeholder} className="  w-[615px] h-[35px] bg-slate-300 border border-[#F2F2F2] rounded-md text-xs px-2" />

                    <div className=' w-[35px] h-[35px] flex justify-center items-center rounded-md  bg-slate-300 cursor-pointer'>
                        <Search size={16} className='text-primary-blue ' />
                    </div>
                </div>

            </div>
        </section>
    );
};
export default Filter;