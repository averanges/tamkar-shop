export const categoriesFilter = [{name: 'Accesasories', number: '5'}, {name: 'Computer', number: '4'},
{name: 'Covid-19', number: '2'},{name: 'Electronics', number: '6'},{name: 'Sunglasses', number: '12'},
{name: 'Furniture', number: '7'},{name: 'Leather', number: '9'}].map((el,idx) => 
    <div key={idx}
    className="flex w-[80%] justify-between border-b-[1px] border-gray-200 cursor-pointer hover:text-bs-orange duration-300">
        <h3>{el.name}</h3>
        <p>{`(${el.number})`}</p>
    </div>)

export const popularTags = ['Beauty', 'Makeup Artist', 'Makeup', 'Hair', 'Nails', 'Hairstyle', 'Skincare'].map((el,idx) => 
    <div key={idx} className='bg-gray-100 flex justify-center items-center border-[1px] border-gray-200 rounded-lg p-1 cursor-pointer hover:bg-bs-orange hover:text-white duration-500'>
        <p>{el}</p>
    </div>)