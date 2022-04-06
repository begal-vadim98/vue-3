const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type or note'
      },
      notes: [],
    }
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes")
      if(localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    onSubmit() {
      this.notes.push(this.input.value)
      this.input.value = ''
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    changeNote(index, note) {
      this.notes[index] = '222'
      console.log(note)
    }
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updateList) {
        localStorage.setItem('notes', JSON.stringify(updateList))
      },
      deep: true
    }
  }
};
Vue.createApp(App).mount('#app')
