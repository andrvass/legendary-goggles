angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.dashboard', {
    url: '/dashboard',
    views: {
      'tab1': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('tabsController.favorites', {
    url: '/favorites',
    views: {
      'tab2': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('tabsController.appointments', {
    url: '/appointments',
    views: {
      'tab3': {
        templateUrl: 'templates/appointments.html',
        controller: 'appointmentsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/dashboard',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'templates/contact.html',
    controller: 'contactCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('tabsController.location', {
    url: '/Location',
    views: {
      'tab1': {
        templateUrl: 'templates/location.html',
        controller: 'locationCtrl'
      }
    }
  })

  .state('tabsController.availabiliity', {
    url: '/availability',
    views: {
      'tab1': {
        templateUrl: 'templates/availabiliity.html',
        controller: 'availabiliityCtrl'
      }
    }
  })

  .state('tabsController.appointment', {
    url: '/appointment',
    views: {
      'tab1': {
        templateUrl: 'templates/appointment.html',
        controller: 'appointmentCtrl'
      }
    }
  })

  .state('tabsController.browse', {
    url: '/browse',
    views: {
      'tab1': {
        templateUrl: 'templates/browse.html',
        controller: 'browseCtrl'
      }
    }
  })

  .state('tabsController.salon', {
    url: '/salon',
    views: {
      'tab1': {
        templateUrl: 'templates/salon.html',
        controller: 'salonCtrl'
      }
    }
  })

  .state('confirm', {
    url: '/confirm',
    templateUrl: 'templates/confirm.html',
    controller: 'confirmCtrl'
  })

  .state('feedback', {
    url: '/feedback',
    templateUrl: 'templates/feedback.html',
    controller: 'feedbackCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('tabsController.services', {
    url: '/services',
    views: {
      'tab1': {
        templateUrl: 'templates/services.html',
        controller: 'servicesCtrl'
      }
    }
  })

  .state('booking', {
    url: '/bookingprovisioned',
    templateUrl: 'templates/booking.html',
    controller: 'bookingCtrl'
  })

  .state('tabsController.booking2', {
    url: '/bookingconfirmed',
    views: {
      'tab1': {
        templateUrl: 'templates/booking2.html',
        controller: 'booking2Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/dashboard/dashboard')

  

});