<template>
  <section>
    <b-row>
      <b-col>
        <div class="text-center">
          <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=332863538" title="Go Vote for these wards; They are amazing!">
            <img src="/static/wards.jpg" class="rounded-circle" width="150" height="150" alt="Wards" />
          </a>
          <h1 class="text-warning">High Ground Vision</h1>
          <p>[HGV] Started as a side project of a group of Dota 2 fans and it still operates that way. We have a number of niche tools for Dota 2. We don’t intend to make any money from it, although we try to at least break even on the server bills. We’re also happy to share our knowledge with the community by open sourcing our stack. Development is done by volunteers contributing in their free time.</p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="text-center">
          <h2 class="text-warning">Open Source</h2>
          <p>We have open sourced our whole Ecosystem. This includes complete projects, tools / tooling, or just odds and ends. Get involved at our <a href="https://github.com/HighGroundVision">GitHub</a></p>
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <b-img src="https://hgv-hyperstone.azurewebsites.net/items/ring_of_basilius_active.png" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Basilius" target="_blank">Basilius</a>
            <p class="list-group-item-description-lg">.Net clients for download hero, ability, and items from daily cache provided by DotaBuff.</p>
            <p class="list-group-item-description-lg">This project is avaible as <a href="https://www.nuget.org/packages/HGV.Basilius/">Nuget</a> package.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hgv-hyperstone.azurewebsites.net/items/Daedalus.png" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Daedalus" target="_blank">Daedalus</a>
            <p class="list-group-item-description-lg">.Net client for interacting with the STEAM api. This is focus around Dota 2 endpoints.</p>
            <p class="list-group-item-description-lg">This project is avaible as <a href="https://www.nuget.org/packages/HGV.Daedalus/">Nuget</a> package.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hgv-hyperstone.azurewebsites.net/items/Crystalys.png" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Crystalys" target="_blank">Crystalys</a>
            <p class="list-group-item-description-lg">.Net client for interacting with the STEAM Server and Dota Game Coordinator</p>
            <p class="list-group-item-description-lg">This project is avaible as <a href="https://www.nuget.org/packages/HGV.Crystalys/">Nuget</a> package.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hgv-hyperstone.azurewebsites.net/items/Hyperstone.png" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Hyperstone" target="_blank">Hyperstone</a>
            <p class="list-group-item-description-lg">A reponsitory of the images for Dota 2. This includes Heros's banner, profile and icon. Images for abilities, items, runes, wards, and some miscellaneous.</p>
            <p class="list-group-item-description-lg">A <a href="https://hgv-hyperstone.azurewebsites.net/">website</a> is mantined as copy of this repo for projects to access from the web.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hgv-hyperstone.azurewebsites.net/items/Desolator.png" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Desolator" target="_blank">Desolator</a>
            <p class="list-group-item-description-lg">The source code to the Abiltiy Drafter web application.</p>
          </li>        
          <li class="list-group-item">
            <b-img src="https://hgv-hyperstone.azurewebsites.net/items/heart.png" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Tarrasque" target="_blank">Tarrasque</a>
            <p class="list-group-item-description-lg">.Net Functions for serverless backing to the Desolator project. That handles login form Steam, Karma for abilities and combos, and match history for users.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hgv-hyperstone.azurewebsites.net/items/Nullifier.png" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Nullifier" target="_blank">Nullifier</a>
            <p class="list-group-item-description-lg">.Net desktop console application to collection stats from AD matches for the Desolator project.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hgv-hyperstone.azurewebsites.net/items/Butterfly.png" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Butterfly" target="_blank">Butterfly</a>
            <p class="list-group-item-description-lg">The source code to the Team Coordinator web application.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hgv-hyperstone.azurewebsites.net/items/Tango.png" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Tango" target="_blank">Tango</a>
            <p class="list-group-item-description-lg">The source code to the [THIS] web application.</p>
          </li>
        </ul>
      </b-col>
      <b-col>
        <div class="text-center">
          <h2 class="text-warning">Projects</h2>
          <p>We have created a number of projects to enhance the Dota 2 community. Below you can find details about the more mature projects.</p>
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <b-img src="/static/runes/arcane.png" rounded="circle" class="icon-sm"></b-img>
            <a href="https://hgv-desolator.azurewebsites.net/" target="_blank">Abiltiy Drafter</a>
            <p class="list-group-item-description-sm">Is a web application that specializes in Ability Draft mode. Providing stats on Ability and Combos. Also, your match history filtered and tailored to AD. As well, a drafting tool to help optimize and maximize your drafting strategy!</p>
          </li>
          <li class="list-group-item">
            <b-img src="/static/runes/damage.png" rounded="circle" class="icon-sm"></b-img>
            <a href="https://hgv-butterfly.azurewebsites.net/" target="_blank">Team Coordinator</a>
            <p class="list-group-item-description-sm">Is a web application that specializes in comparing team composition, team strength, rivals/allies, lane optimizer.</p>
          </li>
        </ul>
        <br />
        <div class="text-center">
          <h2 class="text-warning">Friends</h2>
          <p>We could not have done all this on our own. We had help over the years from members of the following communities.</p>
        </div>
         <ul class="list-group">
          <li class="list-group-item">
            <a href="https://www.opendota.com/" target="_blank">OpenDota</a>
            <p>OpenDota is a volunteer-developed, open source platform providing Dota 2 data. It provides a web interface for casual users to browse through the collected data, as well as an API to allow developers to build their own applications with it.</p>
          </li>
          <li class="list-group-item">
            <a href="https://stratz.com/en-us/" target="_blank">Stratz Esports</a>
            <p>STRATZ gives all DOTA 2 players access to world class analysis. Every match, every player, every stat. Free.</p>
          </li>
          <li class="list-group-item">
            <a href="https://www.dotabuff.com/" target="_blank">DotaBuff</a>
            <p>Dotabuff is the place where millions of Dota 2 players get in depth statistics, share games, their profiles, and better understand the game we all love. We turn raw statistical data from billions of public matches into actionable information that you can use to learn and improve. Dotabuff is widely seen as one of the leading Dota 2 community resources for both new and experienced players.</p>
          </li>
          <li class="list-group-item">
            <a href="https://liquipedia.net/dota2/Main_Page" target="_blank">Liquipedia</a>
            <p>The Dota 2 encyclopedia that you can edit</p>
          </li>
        </ul>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col>
        <div class="text-center">
          © {{year}} - <a href="https://venatiostudios.azurewebsites.net/" target="_blank">Venatio Studios</a>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      'year': new Date().getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group {
  color: black;
}
.icon-sm {
  height: 20px;
  width: 20px;
}
.list-group-item-description-sm {
  position:relative;
  left: 25px;
  padding-right: 25px;
}
.icon-lg {
  /*height: 50px;*/
  width: 50px;
}
.list-group-item-description-lg {
  position:relative;
  left: 50px;
  padding-right: 50px;
}
</style>
