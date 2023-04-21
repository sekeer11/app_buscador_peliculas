import './App.css'

function App () {
  return (
    <div className='page'>
      <header>
        <h2>Buscador de peliculas</h2>
        <form className='formulario'>
          <input type='text' placeholder='Ex: Avenger...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        Aqui se mostraran los resultados
      </main>
    </div>
  )
}

export default App
