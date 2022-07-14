import ReactDOM from 'react-dom';

function Lista() {
  return (
    <div class="stories">
      <h2>Testando</h2>
      <div class="linha-horizontal-topo"></div>
      <div class="stories">Esse é um stories</div>
    </div>
  );
}

const lista = Lista();
ReactDOM.render(lista, document.querySelector(".root"));