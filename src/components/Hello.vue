<template>
  <section>
    <b-row>
      <b-col>
        <div class="text-center">
          <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=332863538" target="_blank" title="Go Vote for these wards; They are amazing!">
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
            <b-img src="https://hyperstone.highgroundvision.com/images/items/132.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Divine" target="_blank">Divine</a>
            <p class="list-group-item-description-lg">TrueSkill and ELO ranking algorithms</p>
            <p class="list-group-item-description-lg">This project is available as <a href="https://www.nuget.org/packages/HGV.Divine/">Nuget</a> package.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/87.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Basilius" target="_blank">Basilius</a>
            <p class="list-group-item-description-lg">.Net clients for download hero, ability, and items from daily cache provided by DotaBuff.</p>
            <p class="list-group-item-description-lg">This project is available as <a href="https://www.nuget.org/packages/HGV.Basilius/">Nuget</a> package.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/140.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Daedalus" target="_blank">Daedalus</a>
            <p class="list-group-item-description-lg">.Net client for interacting with the STEAM api. This is focus around Dota 2 endpoints.</p>
            <p class="list-group-item-description-lg">This project is available as <a href="https://www.nuget.org/packages/HGV.Daedalus/">Nuget</a> package.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/148.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Crystalys" target="_blank">Crystalys</a>
            <p class="list-group-item-description-lg">.Net client for interacting with the STEAM Server and Dota Game Coordinator</p>
            <p class="list-group-item-description-lg">This project is available as <a href="https://www.nuget.org/packages/HGV.Crystalys/">Nuget</a> package.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/55.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Hyperstone" target="_blank">Hyperstone</a>
            <p class="list-group-item-description-lg">A repository of the images for Dota 2. This includes Heros's banner, profile and icon. Images for abilities, items, runes, wards, and some miscellaneous.</p>
            <p class="list-group-item-description-lg">A <a href="https://hyperstone.highgroundvision.com/images/">CDN</a> is cached as copy of this repo for projects to access from the web.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/168.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Desolator" target="_blank">Desolator</a>
            <p class="list-group-item-description-lg">The source code to the Ability Drafter web application.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/113.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Tarrasque" target="_blank">Tarrasque</a>
            <p class="list-group-item-description-lg">.Net Functions for serverless backing to the Desolator project.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/225.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Nullifier" target="_blank">Nullifier</a>
            <p class="list-group-item-description-lg">.Net desktop console application to process stats from AD matches for the Desolator project.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/138.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Butterfly" target="_blank">Butterfly</a>
            <p class="list-group-item-description-lg">The source code to the Team Coordinator web application.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/44.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Tango" target="_blank">Tango</a>
            <p class="list-group-item-description-lg">The source code to the [THIS] web application.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/10.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Quarterstaff" target="_blank">Quarterstaff</a>
            <p class="list-group-item-description-lg">Discord Bot with stream integration for use with in house HGV Leagues.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/159.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Skadi" target="_blank">Skadi</a>
            <p class="list-group-item-description-lg">A place to create Dota2 hero concepts.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/97.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Orchid" target="_blank">Orchid</a>
            <p class="list-group-item-description-lg">Archived</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/items/216.jpg" rounded="circle" class="icon-lg"></b-img>
            <a href="https://github.com/HighGroundVision/Mango" target="_blank">Mango</a>
            <p class="list-group-item-description-lg">Archived</p>
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
            <b-img src="https://hyperstone.highgroundvision.com/images/runes/v2/0.png" rounded="circle" class="icon-sm"></b-img>
            <a href="https://desolator.highgroundvision.com/" target="_blank">Ability Drafter</a>
            <p class="list-group-item-description-sm">Is a web application that specializes in Ability Draft mode. Providing stats on Ability and Combos. Also, your match history filtered and tailored to AD. As well, a drafting tool to help optimize and maximize your drafting strategy! </p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/runes/v2/1.png" rounded="circle" class="icon-sm"></b-img>
            <a href="https://butterfly.highgroundvision.com/" target="_blank">Team Coordinator</a>
            <p class="list-group-item-description-sm">Is a web application that specializes in comparing team composition, team strength, rivals/allies, lane optimizer.</p>
          </li>
          <li class="list-group-item">
            <b-img src="https://hyperstone.highgroundvision.com/images/runes/v2/2.png" rounded="circle" class="icon-sm"></b-img>
            <a href="https://vanguard.highgroundvision.com/" target="_blank">Artifact 1 Puzzle Builder</a>
            <p class="list-group-item-description-sm">This tool will let you create puzzles with a UI that will guide you through the process.</p>
          </li>
        </ul>
        <br />
        <div class="text-center">
          <h2 class="text-warning">Friends</h2>
          <p>We could not have done all this on our own. We had help over the years from members of the following communities.</p>
          <br />
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
      <b-col>
        <div class="text-center">
          <h2 class="text-warning">Events</h2>
          <p>We not only build tools we host events to watch Dota 2, with our local commmunity.</p>
          <br />
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <a href="https://www.eventbrite.ca/e/dota-2-ti8-pubstomp-tickets-44555390372" target="_blank">TI8 Pubstomp</a>
            <p>
              There's nothing better than enjoying The International with friends.
              But not every fan can make the journey to Vancouver to witness the tournament in person.
              Come join us @ The Squire in London, Canada and enjoy a brew while watching TI on the big screen.
            </p>
          </li>
          <li class="list-group-item">
            <a href="https://www.eventbrite.ca/e/dota-2-ti7-pubstomp-tickets-36530662194" target="_blank">TI7 Pubstomp</a>
            <p>Dota International 7 Pubstomp</p>
          </li>
        </ul>
        <br />
        <div class="text-center">
          <h2 class="text-warning">League</h2>
          <p>We also host a Ability Draft League for the community. HGV supports a number of tournaments through out the year. As well, we invite others memebers of the AD community to host their tournaments and leagues with us to grow the AD community together.</p>
          <br />
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <b-link to="/league">HGV AD Open 2021</b-link>
            <p>Amateur Ability Draft League Host by HGV</p>
          </li>
        </ul>
      </b-col>
      <!--
      <b-col>
        
        </ul>
      </b-col>
      -->
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
