<template>
 <div>
<v-toolbar>
    <v-toolbar-side-icon to="/" color="`primary"></v-toolbar-side-icon>
    <v-toolbar-title color="red">Russia World Cup 2018</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
       <!-- <router-link to="/foo" flat>Go to Foo</router-link> -->
      <v-btn to="/results" flat>Results</v-btn>
      <!-- <v-btn flat>Link Two</v-btn> -->
      <!-- <v-btn flat>Link Three</v-btn> -->
    </v-toolbar-items>
  </v-toolbar>

  <v-layout v-for="(match, index) in todaysMatches" :key="index">
    <v-flex xs12 sm6 offset-sm3 class="match-card">
      <v-card >
        <v-card-media src="/static/fifa18.jpg" height="700px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{match.home_team.country}} Vs {{match.away_team.country}}</h3>
            <h3 class="headline mb-0"> Status: {{match.status}}</h3>
            <h3 class="headline mb-0"> Location: {{match.location}}</h3>
            <h3 class="headline mb-0">{{match.home_team.country}} - Goals: {{match.home_team.goals}} </h3>
            <h3 class="headline mb-0">{{match.away_team.country}} - Goals: {{match.away_team.goals}} </h3>
            <h3 class="headline mb-0"> Time: {{match.time}}</h3>
            <h3 class="headline mb-0"> Winner: {{match.winner}}</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <!-- <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data () {
    return{
    todaysMatches: [],
    currentMatches: []
    }
  },
  methods: {
    getTodaysMatches: function () {
      axios.get('http://worldcup.sfg.io/matches/today')
      .then((result) => {
        console.log(result.data)
        result.data.forEach(element => {
          this.todaysMatches.push(element)
          console.log(this.todaysMatches)
        });
      }).catch((err) => {
        console.log(err)
      });
    },
    getResults : function () {
      axios.get('http://worldcup.sfg.io//teams/results')
      .then((result) => {
        console.log("RESULTS",result)

      }).catch((err) => {

      });
    }
  },

  beforeMount: function() {
    this.getTodaysMatches()
    this.getResults()
  }

}
</script>

<style>
.match-card {
  padding-top: 30px;
}

</style>


