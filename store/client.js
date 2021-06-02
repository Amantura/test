import { cloneDeep } from 'lodash'

const namespaced = true

const state = () => ({
  list: [
    {
      id: 1,
      name: 'Akylbekov Amantur Zairbekovich',
      email: 'amantudev@gmail.com',
      phone: '+996 556 330 130',
      imageUrl: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
    },
    {
      id: 2,
      name: 'Akylbekov Amantur Zairbekovich',
      email: 'amantudev@gmail.com',
      phone: '+996 556 330 130',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    },
    {
      id: 3,
      name: 'Akylbekov Amantur Zairbekovich',
      email: 'amantudev@gmail.com',
      phone: '+996 556 330 130',
      imageUrl: 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
    },
    {
      id: 4,
      name: 'Akylbekov Amantur Zairbekovich',
      email: 'amantudev@gmail.com',
      phone: '+996 556 330 130',
      imageUrl: 'https://www.istockphoto.com/resources/images/HomePage/Hero/682374404.jpg',
    },
    {
      id: 5,
      name: 'Akylbekov Amantur Zairbekovich',
      email: 'amantudev@gmail.com',
      phone: '+996 556 330 130',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mDe8EGg2wb0R9IpBbTM_NPqts02UeA3BIy3rjCGvQXLo4Qv2ntEg7KcFp2nwWU1iCpQ&usqp=CAU',
    },
    {
      id: 6,
      name: 'Akylbekov Amantur Zairbekovich',
      email: 'amantudev@gmail.com',
      phone: '+996 556 330 130',
      imageUrl: 'https://az837918.vo.msecnd.net/publishedimages/articles/3105/en-CA/images/cover/1/a-gift-to-you-canada-get-in-the-canadian-spirit-with-our-july-wallpaper-L-1.jpg',
    },
    {
      id: 7,
      name: 'Akylbekov Amantur Zairbekovich',
      email: 'amantudev@gmail.com',
      phone: '+996 556 330 130',
      imageUrl: 'https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80',
    },
  ]
})

const mutations = {
  ADD_CLIENT(state, payload) {
    state.list.push(payload)
  },

  UPDATE_CLIENT(state, payload) {
    const idx = state.list.findIndex(item => item.id === payload.id)
    state.list.splice(idx, 1, payload)
  },

  DELETE_CLIENT(state, payload) {
    const clients = cloneDeep(state.list)
    state.list = clients.filter(item => item.id !== payload.id)
  }
}

export default {
  namespaced,
  mutations,
  state
}
