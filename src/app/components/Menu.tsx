import Image from "next/image";

export default function Menu() {
    return <div id="menupage">
        <div className="md:flex py-10">
            <div className="basis-1/2 md:ml-20 md:mt-14 mx-3 md:mx-0">
                <h1 className="text-center text-4xl font-serif">Our Menu</h1>
                <h4 className="mt-20 text-2xl font-serif tracking-wider">Bread Basket</h4>
                <p className="mt-3 text-gray-400">Assortment of fresh baked fruit breads and muffins 5.50</p>
                <h4 className="mt-8 text-2xl font-serif tracking-wider">Honey Almond Granola with Fruits</h4>
                <p className="mt-3 text-gray-400">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                <h4 className="mt-8 text-2xl font-serif tracking-wider">Belgian Waffle</h4>
                <p className="mt-3 text-gray-400">Vanilla flavored batter with malted flour 7.50</p>
                <h4 className="mt-8 text-2xl font-serif tracking-wider">Scrambled eggs</h4>
                <p className="mt-3 text-gray-400">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                <h4 className="mt-8 text-2xl font-serif tracking-wider">Blueberry Pancakes</h4>
                <p className="mt-3 text-gray-400">With syrup, butter and lots of berries 8.50</p>
            </div>
            <div className="basis-1/2 mt-9 md:mt-0">
                <Image src={"/tablesetting.jpg"} alt="" width={450}
                    height={900} className="mx-auto px-2" />
            </div>
        </div>
    </div>;
}
