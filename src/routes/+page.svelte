<script>
  let openRow
  let details
  
/** @type {import('./$types').PageServerData} */
  export let data;

    function handleClick(i) {
        openRow = openRow === i ? null : i
      }

      function sortResidents(residents) {

        // let residents = []
        // data.streamed.people.results.filter(person => {
        //   let planet_id = person.homeworld.split("/").at(-2)
        //   if ((id -1)  === planet_id) {
        //     residents.push(person.name)
        //   }
        // })
        // return residents
      }

</script>

<aside>
  <section>
    <table>
      <thead>
        <th scope="col">Planet</th>
        <th  scope="col">Population</th>
        <th scope="col">Climate</th>
        <th scope="col">Terrain</th>
      </thead>
      <tbody>
        {#each data.planets.results as planet, id}
        <tr on:click={() => handleClick(id)}>
          <td>{planet.name}</td>
          <td>{planet.population}</td>
          <td>{planet.climate}</td>
          <td>{planet.terrain}</td>
        </tr>
        {#if openRow === id}
        {#await data.streamed.people}
        Loading...
        {:then value}
        <!-- {sortResidents(value)} -->
        <div>
          {#each value.results as person}
          <tr>{person.name}</tr>
          {/each}
        </div>
        {/await}
        {/if}
        {/each}
      </tbody>
    </table>
  </section>
</aside>

<style>
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }
  
  table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }
  
  table th,
  table td {
    padding: .625em;
    text-align: center;
  }
  
  table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
  
  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }
  
    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    
    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: .625em;
    }
    
    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: .8em;
      text-align: right;
    }
    
    table td::before {
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    table td:last-child {
      border-bottom: 0;
    }

    .active {
      display: block;
    }

    .inactive {
      display: none;
    }
  }
</style>