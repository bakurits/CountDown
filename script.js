// Create Countdown
var Countdown = {

    // Backbone-like structure
    $el: $('.countdown'),

    // Params
    countdown_interval: null,
    firefly_interval: null,
    total_seconds: 0,

    // Initialize the countdown  
    init: function (hour, minutes, seconds) {


        clearInterval(this.countdown_interval);
        clearInterval(this.firefly_interval);
        $('#time').css('visibility', 'visible');
        $('#period').css('display', 'none');


        // DOM
        this.$ = {
            hours: this.$el.find('.bloc-time.hours .figure'),
            minutes: this.$el.find('.bloc-time.min .figure'),
            seconds: this.$el.find('.bloc-time.sec .figure')
        };

        // Init countdown values
        this.values = {
            hours: hour,
            minutes: minutes,
            seconds: seconds,
        };

        // Initialize total seconds
        this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

        // Animate countdown to the end 
        this.count();
    },

    count: function () {

        var that = this,
            $hour_1 = this.$.hours.eq(0),
            $hour_2 = this.$.hours.eq(1),
            $min_1 = this.$.minutes.eq(0),
            $min_2 = this.$.minutes.eq(1),
            $sec_1 = this.$.seconds.eq(0),
            $sec_2 = this.$.seconds.eq(1);
        
        let flag = 0;

        this.countdown_interval = setInterval(function () {
            if (that.total_seconds > 0) {

                --that.values.seconds;

                if (that.values.minutes >= 0 && that.values.seconds < 0) {

                    that.values.seconds = 59;
                    --that.values.minutes;
                }

                if (that.values.hours >= 0 && that.values.minutes < 0) {

                    that.values.minutes = 59;
                    --that.values.hours;
                }

                // Update DOM values
                // Hours
                var h = that.values.hours > 9 ? that.values.hours : "0" + that.values.hours;
                var m = that.values.minutes > 9 ? that.values.minutes : "0" + that.values.minutes;
                var s = that.values.seconds > 9 ? that.values.seconds : "0" + that.values.seconds;
                $("#time").html(h + ":" + m + ":" + s);

                --that.total_seconds;
                if (that.total_seconds < 60 && flag == 0) {
                    flag = 1;
                    let firefly_togle = 0;
                    that.firefly_interval = setInterval(function () {
                        if (firefly_togle == 0) {
                            $('#container').css('visibility', 'hidden');
                        } else {
                            $('#container').css('visibility', 'visible');
                        }

                        firefly_togle = 1 - firefly_togle;
                    }, 250);
                }
            }
            else {
                clearInterval(that.countdown_interval);
                clearInterval(that.firefly_interval);
                $('#container').css('visibility', 'visible');
            }
        }, 1000);
    },
    
    setColor: function(color) {
      $("#time").css("color", color);
    }

};

// Create clock
var Clock = {

    // Backbone-like structure
    $el: $('.countdown'),

    // Params
    countdown_interval: null,
    firefly_interval: null,
    total_seconds: 0,

    // Initialize the countdown  
    init: function (hour, minutes, seconds) {


        clearInterval(this.countdown_interval);
        clearInterval(this.firefly_interval);
        $('#time').css('visibility', 'visible');
        $('#period').css('display', 'block');


        // DOM
        this.$ = {
            hours: this.$el.find('.bloc-time.hours .figure'),
            minutes: this.$el.find('.bloc-time.min .figure'),
            seconds: this.$el.find('.bloc-time.sec .figure')
        };

        // Init countdown values
        this.values = {
            hours: hour,
            minutes: minutes,
            seconds: seconds,
        };

        // Initialize total seconds
        this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

        // Animate countdown to the end 
        this.count();
    },

    count: function () {

        var that = this,
            $hour_1 = this.$.hours.eq(0),
            $hour_2 = this.$.hours.eq(1),
            $min_1 = this.$.minutes.eq(0),
            $min_2 = this.$.minutes.eq(1),
            $sec_1 = this.$.seconds.eq(0),
            $sec_2 = this.$.seconds.eq(1);
        
        let flag = 0;

        this.countdown_interval = setInterval(function () {
            if (that.total_seconds > 0) {

                --that.values.seconds;

                if (that.values.minutes >= 0 && that.values.seconds < 0) {

                    that.values.seconds = 59;
                    --that.values.minutes;
                }

                if (that.values.hours >= 0 && that.values.minutes < 0) {

                    that.values.minutes = 59;
                    --that.values.hours;
                }

                // Update DOM values
                // Hours
                var h = that.values.hours > 9 ? that.values.hours : "0" + that.values.hours;
                var m = that.values.minutes > 9 ? that.values.minutes : "0" + that.values.minutes;
                var s = that.values.seconds > 9 ? that.values.seconds : "0" + that.values.seconds;
                $("#time").html(h + ":" + m + ":" + s);

                --that.total_seconds;
                if (that.total_seconds < 60 && flag == 0) {
                    flag = 1;
                    let firefly_togle = 0;
                    that.firefly_interval = setInterval(function () {
                        if (firefly_togle == 0) {
                            $('#container').css('visibility', 'hidden');
                        } else {
                            $('#container').css('visibility', 'visible');
                        }

                        firefly_togle = 1 - firefly_togle;
                    }, 250);
                }
            }
            else {
                clearInterval(that.countdown_interval);
                clearInterval(that.firefly_interval);
                $('#container').css('visibility', 'visible');
            }
        }, 1000);
    },
    
    setColor: function(color) {
      $("#time").css("color", color);
    }

};




// Let's go !
Countdown.init(0, 1, 0);
Countdown.setColor("#c3278f");
