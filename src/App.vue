  <template>
    <v-app v-app style="
    background: #3A1C71;
    background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
    background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
  ">
    <v-card class="overflow-hidden">
      
      <v-navigation-drawer fixed temporary v-model="sideNav">
        <v-list>      
          <v-list-group           
            v-for="item in items"
            :key="item"          
            :to="item.link">       
            <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> 
                
          <template v-slot:activator>
            <v-list-item-title dark>{{ item.title }}</v-list-item-title>
          </template>
        
        <v-list-item color='light-green accent-4'
            v-for="subItem in item.items"
            :key="subItem.title"
              :to="subItem.link"> 
            <v-list-item-content>
              <v-list-item-title >{{subItem.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        </v-list>     
      </v-navigation-drawer>   
<v-app-bar           
     light
      shrink-on-scroll
      src="./assets/background_image.jpg"
      scroll-target="#scrolling-techniques-2">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav"
          class="hidden-sm-and-up "></v-app-bar-nav-icon>
        
        <v-toolbar-title color='indigo accent-2'>
           <p justify="right">  
           <v-avatar color="indigo">
               <span class="white--text headline">HM</span>   
               </v-avatar> Garment PLC </P>
            
          <router-link to="/" tag="span" style="cursor: pointer">Home</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items >    
          <v-tab color='indigo accent-2'
                v-for="item in items"
                :key="item.title"
                :to="item.link">
          <v-menu :close-on-content-click="false" open-on-hover bottom offset-y>      
              <template v-slot:activator="{ on}">           
              
                  <v-list-item-title dark v-on="on">
                        {{ item.title }}   
                    </v-list-item-title>
                </template>           
        
        <v-list>      
          <v-list-item flat color='green accent-3'
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.link"
          >
            <v-list-item-content>
                <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>        
          </v-list>           
        </v-menu> 
        </v-tab>        
      </v-toolbar-items>
      </v-app-bar>
    </v-card>
      <v-content>
        <router-view></router-view>
      </v-content>

    </v-app>
  </template>

  <script>
    export default {
      data () {
        return {
          sideNav: false,
          items: [
            { title: 'OUR Services', link: '/services', color:"success",
            
            items:[        
              
              { title: 'CCTV Camera' },
               { title: 'Network Configuration' },
                { title: 'Home Automation' },
                { title: 'Building Automation' }, 
                 { title: 'Video Conference Configuration' }, 
                  { title: 'Door Lock Security' }, 
                { title: 'Artificial Intelligence based Application Development' }        
            ]
            
            },
          
            { title: 'Blog', link: '/services/blog',
                
                },
            { title: 'Solutions', link: '/solutons', 
              items: [
                  { title: 'hardware services'},
                { title: 'software Services'} 
                  ]
            },
            { title: 'Admin', link: '/HmGarmentPLC/Admin',
              items: [
                  {  title: 'Approve Feed Back', link: '/HmGarmentPLC/Admin'},
                  { title: 'Add News', link: '/HmGarmentPLC/Admin/addNewServices'},
                  {  title: 'Customer Feedback', link: '/HmGarmentPLC/Admin'} 
                  ]
             },
            { title: 'Contact Us', link: '/contact_us'        
             }
          ]
        }
      }
    }
  </script>

 