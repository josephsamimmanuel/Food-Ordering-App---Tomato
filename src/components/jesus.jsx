{showItems[index]&&(<div className="flex flex-col">
    {itemCategory.map((i) => (
      <div key={i?.card?.info?.id}>
          <span className=" text-lg font-bold">({itemCategory.length})</span>
          <RestaurentMenuCard resData={i} key={i?.card?.info?.name}/>
      </div>
    ))}
  </div>)}

  
{showItems[index]&&(<div>
    {itemCategory.map((items, index) => (
      <div key={items?.card?.card?.title} className="flex flex-col border-t-2 my-6 gap-6 border-gray-100 shadow-2xl">
          
        <div key={index} className="flex justify-between py-1" onClick={() => handleCategoryClick(index)}>
          {/* Heading Recommeded */}
          <h3 style={{ fontSize: 'x-large', fontWeight: '800' }}>
            {items.card?.card?.title}
          </h3>
          <button className="bg-blue-700 text-white px-4 rounded-md">
            {showItems[index] ? 'Hide' : 'Show'}
          </button>
        </div>
        
        <CategoryList itemCategory={items?.card?.card?.itemCards} showItems={showItems} handleCategoryClick={handleCategoryClick} index={index}/>
      </div>
    ))}
    </div>)}


{<div
  key={items?.card?.card?.title}
  className="flex flex-col justify-between py-1"
  onClick={() => handleCategoryClick()}
>
  {/* Heading Recommeded */}
  <h3 style={{ fontSize: "x-large", fontWeight: "800" }}>
    {items.card?.card?.title}
  </h3>
  <button className="bg-blue-700 text-white px-4 rounded-md">
    {showItems[index] ? "Hide" : "Show"}
  </button>
  
  {showItems&& <CategoryList itemCategory={items?.card?.card?.itemCards} showItems={showItems} handleCategoryClick={handleCategoryClick} index={index}/>}
</div>}