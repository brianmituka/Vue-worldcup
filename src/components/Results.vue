<template>
 <div>
<v-toolbar>
    <v-toolbar-side-icon to="/"></v-toolbar-side-icon>
    <v-toolbar-title color="red">Russia World Cup 2018</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
       <!-- <router-link to="/foo" flat>Go to Foo</router-link> -->
      <v-btn to="/results" flat>Results</v-btn>
      <!-- <v-btn flat>Link Two</v-btn> -->
      <!-- <v-btn flat>Link Three</v-btn> -->
    </v-toolbar-items>
  </v-toolbar>

   <v-data-table
    :headers="headers"
    :items="results"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <!-- {{props.item.country}} -->
      <td>{{ props.item.country }}</td>
      <td class="text-xs-right">{{ props.item.draws }}</td>
      <td class="text-xs-right">{{ props.item.fifa_code }}</td>
      <td class="text-xs-right">{{ props.item.games_played }}</td>
      <td class="text-xs-right">{{ props.item.group_letter }}</td>
      <td class="text-xs-right">{{ props.item.points }}</td>
      <td class="text-xs-right">{{ props.item.losses }}</td>
      <td class="text-xs-right">{{ props.item.wins }}</td>
    </template>
  </v-data-table>


  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data () {
    return{
 headers: [
          {
            text: 'Country',
            align: 'left',
            sortable: false,
            value: 'country'
          },
          { text: 'Draws', value: 'draws' },
          { text: 'Fifa Code', value: 'fifa_code' },
          { text: 'Games Played', value: 'games_played' },
          { text: 'Group', value: 'group_letter' },
          { text: 'Points', value: 'points' },
          { text: 'Losses', value: 'losses' },
          { text: 'Wins', value: 'wins' }
        ],
        results: [
        ]
      }
    },
  methods: {
    getResults : function () {
      axios.get('http://worldcup.sfg.io//teams/results')
      .then((result) => {
        result.data.forEach(element => {
          this.results.push(element)
        });

        console.log("RESULTS",result.data)

      }).catch((err) => {
        console.log(err)

      });
    }
  },

  created: function() {
    //this.getTodaysMatches()
    this.getResults()
  }

}
</script>

<style>
.match-card {
  padding-top: 30px;
}

</style>


