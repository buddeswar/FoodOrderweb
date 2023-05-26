import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/food';
import { Tag } from 'src/app/shared/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;

  }






  getAllFoodByTag(tag: string): Foods[]{
    return tag == 'All' ?
      this.getAll() : this.getAll().filter(food => food.tags?.
        includes(tag));
    //you can write this statement is very simple type lets do it.


}

  getAllTags(): Tag[]{
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },

      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 1 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1},
    ]

}







  getAll():Foods[]{
    return [
      {
        id: 1,
        price: 10,
        name: 'Lemon with Fruits',
        cookTime: '10-20',
        favorite: false,
        origin: 'india china us america',
        star: 4.5,
       imageUrl: '/assets/pexels-lisa-vhb-916925.jpg',
       tags: [  'Lunch', 'SlowFood', 'Soup'],
},

 {
        id:2,
        price: 5,
        name: 'Burger Sliders',
        cookTime: '20-30',
   favorite: false,
        origin: 'america middle east china',
        star: 4.5,
       imageUrl: 'assets/pexels-rajesh-tp-1633525.jpg',
       tags: ['FastFood', 'Pizza','Hamburger' ],
},

{
        id:3,
        price: 15,
        name: 'pizza pepperoni',
        cookTime: '10-25',
  favorite: false,
        origin: 'france india',
        star: 4.5,
       imageUrl: 'assets/pexels-kristina-paukshtite-1998920.jpg',
       tags: [   'Fry'],
      },

{
        id:4,
        price: 5,
        name: 'Veg Biryani',
        cookTime: '25-30',
  favorite: false,
        origin: 'india',
        star: 4.5,
       imageUrl: 'assets/pexels-lumn-1410235.jpg',
       tags: [  'Lunch'],
      },

      {
        id:5,
        price: 15,
        name: 'Boild Egg',
        cookTime: '5-10',
        favorite: false,
        origin: 'north india',
        star: 4.5,
       imageUrl:'assets/pexels-kyle-roxas-2122294.jpg',
       tags: [ 'FastFood' ],
      },

      {
        id:6,
        price: 10,
        name: 'Palak Paneer',
        cookTime: '10-20',
        favorite: false,
        origin: 'india asia',
        star: 4.5,
       imageUrl:      'assets/pexels-mister-mister-3434523.jpg',

       tags: ['Lunch' ],
      },
{
        id:7,
        price: 20,
        name: 'Choco Cake',
        cookTime: '20-30',
  favorite: false,
        origin: 'south America',
        star: 4.5,
       imageUrl:'assets/pexels-marta-dzedyshko-2067396.jpg',



       tags: ['FastFood']
      },
      {
        id:8,
        price: 15,
        name: 'Cheese Souffle',
        cookTime: ' 10-20',
        favorite: false,
        origin: 'india',
        star: 4.5,
       imageUrl: 'assets/pexels-william-choquette-2641886.jpg',



       tags: ['FastFood']
      },















    ]
  }
}
