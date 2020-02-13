import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#results');
  // Sortable.create(list);

  Sortable.create(list, {
    ghostClass: "make-it-gray",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  })
};

export { initSortable };
