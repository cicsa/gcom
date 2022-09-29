<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div  class="shape shape-style-1 shape-default shape-skew">
                    
                </div>
                <div style="margin-top:-70px" class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">Guia de Seguimiento
                                    <p>Ingrese la guia de seguimiento que recibio por correo electronico</p>
                                </h1>
                              
                              
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-10">
                                    <base-input     
                                        v-model="guia"
                                        alternative
                                        placeholder="Guia de Seguimiento"
                                        addon-left-icon="ni ni-zoom-split-in">
                                    </base-input>
                            </div>
                            <div class="col-lg-2">
                                     <base-button @click="buscarServicio" type="neutral">
                                   Buscar
                                </base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section v-if="mostrarSteep"  class="section section-lg pt-lg-0 mt--200">
            <div class="container" >
                <div  class="row justify-content-center">
                    <div  class="col-lg-12">
                        <div  class="row row-grid">
                            <div class="col-lg-12">
                                <div class="card shadow-lg--hover">
                                    <div class="row d-flex justify-content-between px-3 top">
                                        <div class="d-flex">
                                            <h5 style="margin-left:40px;font-size: 14px;">Guia <span class="text-primary font-weight-bold">{{this.datosServicio._id}}</span></h5>
                                        </div>
                                        <div class=" text-sm-right ">
                                            <p class="mb-0" style="margin-right:40px;" >
                                                Puerto <span><strong>{{this.datosServicio.puerto}}</strong></span>
                                            </p>
                                            <p style="margin-right:40px"><span class="font-weight-bold">{{this.datosServicio.embarcacion.nombre}}</span></p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                            <div class="col-lg-12">
                                                <ul id="progressbar" class="text-center">
                                                    <li :class="`step0 ${servicioConfirmado}`">
                                                       <br><p><span>Servicio <br> Confirmado</span></p>
                                                       <icon name="ni ni-satisfied" style="margin-top:-30px"  size="md"></icon>
                                                    </li>
                                                    <li :class="`step0 ${onHireRealizado}`">
                                                        <br><p><span>On Hire <br> Realizado</span></p>
                                                       <icon name="ni ni-button-play" style="margin-top:-30px"  size="md"></icon>
                                                    </li>
                                                    <li :class="`step0 ${enTransito}`">
                                                        <br><p><span>Servicio <br> En Transito</span></p>
                                                       <icon name="ni ni-send" style="margin-top:-30px"  size="md"></icon>
                                                    </li>
                                                    <li :class="`step0 ${offHireRealizado}`">
                                                        <br><p><span>Off Hire <br> Realizado</span></p>
                                                       <icon name="ni ni-button-power" style="margin-top:-30px"  size="md"></icon>
                                                    </li>
                                                    <li class="step0">
                                                        <br><p><span>Servicio <br> Realizado</span></p>
                                                       <icon name="ni ni-folder-17" style="margin-top:-30px"  size="md"></icon>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                    </div>
                                   
                                   
                                </div>
                              
                            </div>
                           
                           
                        </div>
                        
                    </div>
                    
                </div>
                 
            </div>
          
        </section>
        <section  v-if="mostrarSteep">
           <div  class="row d-flex justify-content-center mt-70 mb-70">

          <div class="col-md-6">

            <div class="main-card mb-3 card">
                                        <div class="card-body">
                                            <h5 class="card-title">Guia de Seguimiento</h5>
                                            <div class="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                <div class="vertical-timeline-item vertical-timeline-element">
                                                    <div>
                                                        <span class="vertical-timeline-element-icon bounce-in">
                                                            <i class="badge badge-dot badge-dot-xl badge-success"></i>
                                                        </span>
                                                        <div class="vertical-timeline-element-content bounce-in">
                                                            <h4 class="timeline-title" style="color:#2dce89">Servicio Confirmado</h4>
                                                            <p>Servicio de {{this.datosServicio.tipoServicio}} </p>
                                                            <base-button @click="descargarCotizacion(datosServicio.cotizacion)" type="primary" size="sm" icon="ni ni-folder-17">Cotizacion</base-button>
                                                            <base-button @click="descargarPedido(datosServicio.pedido)" type="primary" size="sm" icon="ni ni-folder-17">Pedido</base-button>
                                                            <span class="vertical-timeline-element-date">{{this.moment(this.datosServicio.fechaTentativa).subtract(10, 'days').calendar()}}</span> 
                                                         
                                                        </div>
                                                    </div>
                                                </div>
                                                 <div v-if="onHireRealizado" class="vertical-timeline-item vertical-timeline-element">
                                                    <div>
                                                        <span class="vertical-timeline-element-icon bounce-in">
                                                            <i class="badge badge-dot badge-dot-xl badge-success"></i>
                                                        </span>
                                                        <div class="vertical-timeline-element-content bounce-in">
                                                            <h4 style="color:orange" class="timeline-title">On-Hire Realizado</h4>
                                                            <p>On-Hire realizado en el muelle de  <span style="color:blue">{{this.datosServicio.onhire.muelle}}</span> por motivos de {{this.datosServicio.onhire.motivos}}</p>
                                                            <base-button type="primary" size="sm" icon="ni ni-folder-17">PDF</base-button>
                                                            <span class="vertical-timeline-element-date">{{this.moment(this.datosServicio.onhire.fechaOnHire).subtract(10, 'days').calendar()}}</span> 
                                                         
                                                        </div>
                                                    </div>
                                                </div>
                                                 <div v-if="enTransito" class="vertical-timeline-item vertical-timeline-element">
                                                    <div v-for="(movimiento,i) in movimientos" :key="i">
                                                        <span class="vertical-timeline-element-icon bounce-in">
                                                            <i class="badge badge-dot badge-dot-xl badge-success"></i>
                                                        </span>
                                                        <div class="vertical-timeline-element-content bounce-in">
                                                            <h4 class="timeline-title">Movimiento:  <span  style="color:green">{{movimiento.tipoMovimiento}}</span> </h4>
                                                            <p>{{movimiento.movimiento}}</p>
                                                            <span class="vertical-timeline-element-date">{{moment(movimiento.horario).subtract(10, 'days').calendar()}}</span> 
                                                         
                                                        </div>
                                                    </div>
                                                </div>

                                                 <div v-if="offHireRealizado" class="vertical-timeline-item vertical-timeline-element">
                                                    <div>
                                                        <span class="vertical-timeline-element-icon bounce-in">
                                                            <i class="badge badge-dot badge-dot-xl badge-success"></i>
                                                        </span>
                                                        <div class="vertical-timeline-element-content bounce-in">
                                                            <h4 style="color:orange" class="timeline-title">Off-Hire Realizado</h4>
                                                            <p>Off-Hire realizado en el muelle de {{this.datosServicio.ofhire.muelle}} por motivos de {{this.datosServicio.ofhire.motivos}}</p>
                                                            <base-button type="primary" size="sm" icon="ni ni-folder-17">PDF</base-button>
                                                            <base-button type="primary" size="sm" icon="ni ni-folder-17">Bitacora</base-button>
                                                            <span class="vertical-timeline-element-date">{{this.moment(this.datosServicio.ofhire.fechaOnHire).subtract(10, 'days').calendar()}}</span> 
                                                         
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </div>
                                        </div>
                                    </div>        
           
        </div> </div>
        </section>
     
 <modal :show.sync="modal2"
                 
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Error</h6>

                <div class="py-3 text-center">
                    <i class="ni ni-bell-55 ni-3x"></i>
                    <h4 class="heading mt-4">Servicio no encontrado</h4>
                    <p>El servicio no existe o no se encuentra confirmado</p>
                </div>

                <template slot="footer">
                 
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modal2 = false">
                        Cerrar
                    </base-button>
                </template>
            </modal>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                       <h2 class="display-3 text-white">Acerca de Nostros</h2>
                        <p class="lead text-white">AMLS es una empresa marítima 100% mexicana que presta servicios a la industria global del sector energético.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-6">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                       <p class="text-white mt-3">Nuestras soluciones en servicios abarcan la transportación marítima, agencia consignataria, la logística costa fuera y terrestre. Fortalecemos el conocimiento y la experiencia de nuestros clientes, asegurando así las decisiones de calidad.</p>
                      
                    </div>
                   
                    <div class="col-lg-6">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <p class="text-white mt-3">Para garantizar una respuesta rápida y eficiente a cualquier solicitud de nuestros clientes, nuestras oficinas operan las 24 horas del día, los 7 días de la semana, los 365 días del año con un equipo de trabajo experimentado</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Necesitas ayuda?</h4>
                            <p class="mt-0">Por favor complete su información y estaremos contactandolo via correo electronico</p>
                            <base-input class="mt-5"
                                        alternative
                                        placeholder="Nombre"
                                        addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input alternative
                                        placeholder="Correo"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Escriba un mensaje..."></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                               Enviar mensaje
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>

       
      

    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

import axios from 'axios'
import moment from 'moment'
export default {
  name: "home",
 components: {
    Modal
  },
  data(){
      return{
          moment:moment,
          guia:'',
           modal2: false,
          datosServicio:[],
          servicioConfirmado:'',
          onHireRealizado:'',
          enTransito:'',
          offHireRealizado:'',
          servicioRealizado:'',
          movimientos:[],
          mostrarSteep:false,
          
      }
  },
  methods:{
      buscarServicio(){
             
              let me=this;
              axios.get('confirmarServicio/listServiciosCliente?_id='+this.guia).then(function (response){
              me.datosServicio = response.data
              
             
            
              switch(response.data.estado){
                  case "Confirmado":
                      me.servicioConfirmado='active';
                      me.onHireRealizado='';
                      me.enTransito='';
                      me.mostrarSteep = true
                      me.offHireRealizado='';
                      me.servicioRealizado='';
                    break;
                  case "On-Hire Firmado":
                      me.servicioConfirmado='active';
                      me.onHireRealizado='active';
                       me.mostrarSteep = true
                      me.enTransito='';
                      me.offHireRealizado='';
                      me.servicioRealizado='';
                    break;
                      case "On Hire Realizado":
                      me.servicioConfirmado='active';
                      me.onHireRealizado='';
                       me.mostrarSteep = true
                      me.enTransito='';
                      me.offHireRealizado='';
                      me.servicioRealizado='';
                    break;
                  
                  case "En Transito":
                      me.servicioConfirmado='active';
                      me.onHireRealizado='active';
                      me.enTransito='active';
                       me.mostrarSteep = true
                      me.offHireRealizado='';
                      me.servicioRealizado='';
                      me.movimientos = response.data.movimientos.movimientos
                    break;
                    case "Off-Hire Firmado":
                      me.servicioConfirmado='active';
                      me.onHireRealizado='active';
                      me.enTransito='active';
                       me.mostrarSteep = true
                      me.offHireRealizado='active';
                      me.servicioRealizado='';
                       me.movimientos = response.data.movimientos.movimientos
                    break;
                     case "Off Hire Realizado":
                      me.servicioConfirmado='active';
                      me.onHireRealizado='active';
                      me.enTransito='active';
                       me.mostrarSteep = true
                      me.offHireRealizado='';
                      me.servicioRealizado='';
                       me.movimientos = response.data.movimientos.movimientos
                    break;
                    case "En Proceso":
                        
                        me.modal2=true
                    break;
                  

                    
              }
              }).catch(function(error){
                 
                  console.log(error)
              })
        },

           descargarCotizacion(item) {
      window.open(item, "_blank");
    },
    descargarPedido(item) {
      window.open(item, "_blank");
    },

  }
};
</script>

<style>
    .top{
        padding-top:40px;
        padding-left:13%!important;
        padding-right: 13%!important;
    }
    .card{
        z-index:0;
        background-color: #e8e7e7;
        padding-bottom:20px;
        margin-top:-20px;
        border-radius: 10px;
    }
    #progressbar{
        margin-bottom: 0px;
        overflow: hidden;
        padding-left: 0px;
        margin-top: 30px
    }
    #progressbar li{
       list-style: none;
       font-size: 13px;
       width: 20%;
       float: left;
       position: relative;
       font-weight:400;
    }
    #progressbar .step0:before{
        font-family: FontAwesome;
        content: "\f10c";
        color:white
    }
    #progressbar li:before{
        width:40px;
        height: 40px;
        line-height:45px;
        display: block;
        font-size: 20px;
        background: #C5CAE9;
        border-radius: 50%;
        margin:auto;
        padding: 0px;
    }
    #progressbar li:after{
        content: '';
        width:150%;
        height:12px;
        background: #C5CAE9;
        position: absolute;
        left:0;
        top:16px;
        z-index: -1;
    }
    #progressbar li:last-child:after{
        border-top-right-radius: 10px;
        border-bottom-right-radius:10px;
        position: absolute;
        left:-50%;
    }
    #progressbar li:nth-child(2):after,
    #progressbar li:nth-child(3):after{
        left: -50%;

    }
     #progressbar li:first-child:after{
        border-top-left-radius: 10px;
        border-bottom-left-radius:10px;
        position: absolute;
        left:-50%;
    }
    #progressbar li.active:before,
    #progressbar li.active:after{
        background: #172b4d;
    }
    #progressbar li.active:before{
        font-family: FontAwesome;
        content: "\f00c";
    }
    .icon-track{
        width:35px;
        height:35px;
        border-right: 20px;
        margin-right:20px;
    }
    .icon-content{
        padding-bottom:10px
    }
    .mt-70{
     margin-top: 70px;
}

.mb-70{
     margin-bottom: 70px;
}

.card {
    box-shadow: 0 0.46875rem 2.1875rem rgba(209, 214, 224, 0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
    border-width: 0;
    transition: all .2s;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 2px solid rgba(50, 247, 155, 0.671);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}
.vertical-timeline {
    width: 100%;
    position: relative;
    padding: 1.5rem 0 1rem;
}

.vertical-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 77px;
    height: 100%;
    width: 4px;
    background: #175592;
    border-radius: .25rem;
}

.vertical-timeline-element {
    position: relative;
    margin: 0 0 1rem;
}

.vertical-timeline--animate .vertical-timeline-element-icon.bounce-in {
    visibility: visible;
    animation: cd-bounce-1 .8s;
}
.vertical-timeline-element-icon {
    position: absolute;
    top: 0;
    left: 60px;
}

.vertical-timeline-element-icon .badge-dot-xl {
    box-shadow: 0 0 0 5px #fff;
}

.badge-dot-xl {
    width: 18px;
    height: 18px;
    position: relative;
}
.badge:empty {
    display: none;
}


.badge-dot-xl::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: .25rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -5px 0 0 -5px;
    background: #fff;
}

.vertical-timeline-element-content {
    position: relative;
    margin-left: 90px;
    font-size: .8rem;
}

.vertical-timeline-element-content .timeline-title {
    font-size: .8rem;
    text-transform: uppercase;
    margin: 0 0 .5rem;
    padding: 2px 0 0;
    font-weight: bold;
}

.vertical-timeline-element-content .vertical-timeline-element-date {
    display: block;
    position: absolute;
    left: -90px;
    top: 0;
    padding-right: 10px;
    text-align: right;
    color: #20001c;
    font-size: .7619rem;
    white-space: nowrap;
}

.vertical-timeline-element-date2 {
   
    position: absolute;
    left: -90px;
    top: 2;
    padding-right: 4px;
   
    color: #20001c;
    font-size: .7619rem;
    
}

.vertical-timeline-element-content:after {
    content: "";
    display: table;
    clear: both;
}

</style>