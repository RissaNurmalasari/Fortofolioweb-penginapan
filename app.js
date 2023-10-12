var app = new Vue({
  el: '#app',
  data: {
    searchQuery: '',
    name: '',
    date: '',
    guests: 1,
    rooms: [
        { id: 1, name: 'Homestay Melia', price: 100000, guest: 1},
        { id: 2, name: 'Homestay Pelita Indah', price: 120000, guest: 2},
        { id: 3, name: 'Homestay Marimar', price: 150000, guest: 2},
        { id: 4, name: 'RedDoorz Krisna', price: 150000, guest: 3},
        { id: 5, name: 'Villa Mawar', price: 200000, guest: 2},
        { id: 6, name: 'Hotel Nakula', price: 400000, guest: 2},
        { id: 7, name: 'Hotel Pantai Indah', price: 450000, guest: 3},
        { id: 8, name: 'Resort Lilacans', price: 300000, guest: 2},
        { id: 9, name: 'Resort Vebytin', price: 280000, guest: 2},
        { id: 10, name: 'Homestay Ibu Entin', price: 120000, guest: 1},
        { id: 11, name: 'RedDoorz Lautbiru', price: 150000, guest: 1},
    ],
    cart: [],
    orders: [],
  },
  computed: {
    filteredRooms() {
      return this.rooms.filter(room =>
        room.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    total() {
      return this.cart.reduce((acc, item) => acc + (item.room.price ), 0);
    },
  },
  methods: {
    search() {
      // Implement search functionality here
    },
    
    addToCart(room) {
      if (this.guests > room.guest) {
        alert('Jumlah tamu melebihi kapasitas maksimal kamar');
        return;
      }
      this.cart.push({room: room, guests: this.guests});
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
    deleteFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
    
    saveOrder() {
      const order = {
        name: this.name,
        date: this.date,
        total: this.total,
        items: this.cart,
      };
      console.log('Nama: ' + order.name);
      console.log('Tanggal Pesan: ' + order.date);
      console.log('Penginapan:');
      order.items.forEach(item => {
        console.log('- ' + item.room.name + ' (harga: ' + item.room.price + ', tamu: ' + item.guests + ')');
      });
      console.log('Total Harga: ' + order.total);
      this.orders.push(order);
      this.cart = [];
      this.name = '';
      this.date = '';
      this.guests = 1;
    },
  },
})