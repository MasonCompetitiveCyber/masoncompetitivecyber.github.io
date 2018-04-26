var fallmode = 0

function readFutureMeeting(id) {
    $.getJSON('/meeting/fall?nocache=' + (new Date()).getTime(), null, function(data) {
    console.log('JSON data loaded')
    entry = "<button type='button' class='btn btn-primary dropdown-toggle' id='meetingbutton' data-toggle='dropdown'>Click to select meeting<span class='caret'></span></button> <ul class='dropdown-menu' role='menu'>"
    $.each(data["meetings"], function(i, item) {
    if ( id == item['id'] ){
      $('#meetingbutton').html(item['meetingDate']+'<span class=\'caret\'></span>')
      if ((item['basictopic'] == item['advtopic'])&&(item['location'] == item['advlocation'])) {
      data = 'On Thursday, ' + item['meetingDate'] + ' Gold Track will be going over <b>' + item['basictopic'] + '</b> in <b>' + item['location'] + '</b>, and Green Track will be in the same room from ' + item['from'] + ' til ' + item['to'] + '.'
      } else {
      data = 'On Thursday, ' + item['meetingDate'] + ' Gold Track will be going over <b>' + item['basictopic'] + '</b> in <b>' + item['location'] + '</b>, whereas Green Track will be going over <b>' + item['advtopic'] + '</b> at <b>' + item['advlocation'] + '</b> from ' + item['from'] + ' til ' + item['to'] + '.'
      }
      $('#meetingcontent').html(data)
    };

  })})};


function futurify(){
  var newid = 0
  if (fallmode == 0) {
    fallmode = 1
    $.getJSON('/meeting/fall?nocache=' + (new Date()).getTime(), null, function(data) {
      console.log('JSON data loaded')
      console.log(data)
      entry = "<button type='button' class='btn btn-primary dropdown-toggle' id='meetingbutton' data-toggle='dropdown'>Click to select meeting<span class='caret'></span></button> <ul class='dropdown-menu' role='menu'>"
      $.each(data["meetings"], function(i, item) {

          time = '18:30'
          if ( Date.now() - Date.parse(item["meetingDate"] +  ' ' +  item["year"] + ' ' + time) <= 0) {
            console.log(Date.now() - Date.parse(item["meetingDate"] +  item["year"]))
            if (newid == 0) {
              newid = item['id']
            }
            entry = entry + "<li class='selectorbs'><a href=javascript:readFutureMeeting(" + item['id'] + ")>" + item["meetingDate"] + "</a></li>"
          console.log(entry)
        } else {
          // Do not generate an entry
            entry = entry
        }
      });
      entry = entry + '</ul></button>'
      readFutureMeeting(newid)
      $("#meetingdrop").html(entry)
    });
        $.getJSON('/meeting/fall?nocache=' + (new Date()).getTime(), null, function(data) {
          console.log('JSON data loaded')
          console.log(data)
          entry = "<tr><th>Date</th><th>Yellow Track</th><th>Green Track</th></tr>"
          $.each(data["meetings"], function(i, item) {
          console.log('Iterating')
          console.log(Date.parse(item["meetingDate"] + ' ' + item["year"]))
          time = item["to"]
          if (time.includes('pm')) {
            time = time.split('pm')[0]
            hour = time.split(':')[0]
            min = time.split(':')[1]
            hour = parseInt(hour) + 12
            time = hour + ":" + min
          } else {
            time = time.split('am')[0]
            hour = time.split(':')[0]
            min = time.split(':')[1]
            time = hour + ":" + min
          }
          if ( Date.now() - Date.parse(item["meetingDate"] +  ' ' +  item["year"] + ' ' + time) <= 0) {
              console.log(item["meetingDate"])
              console.log(time)
              console.log(Date.now() - Date.parse(item["meetingDate"] +  item["year"] + ' ' + time))
                entry = entry + "<tr><td>" + item["meetingDate"] + '</td><td>' + item["basictopic"] + '</td><td>' + item["advtopic"] + '</td></tr>'
              console.log(entry)
            } else {
                entry = entry + "<tr><td><b>✓</b><strike>" + item["meetingDate"] + '</strike></td><td><strike>' + item["basictopic"] + '</strike></td><td><strike>' + item["advtopic"] + '</strike></td></tr>'
            }
          });
          $("#meetingtopics").html(entry)
        });
      } else {
    $.getJSON('/meeting/json?nocache=' + (new Date()).getTime(), null, function(data) {
      console.log('JSON data loaded')
      console.log(data)
      entry = "<button type='button' class='btn btn-primary dropdown-toggle' id='meetingbutton' data-toggle='dropdown'>Click to select meeting<span class='caret'></span></button> <ul class='dropdown-menu' role='menu'>"
      $.each(data["meetings"], function(i, item) {

          time = '18:30'
          if ( Date.now() - Date.parse(item["meetingDate"] +  ' ' +  item["year"] + ' ' + time) <= 0) {
            console.log(Date.now() - Date.parse(item["meetingDate"] +  item["year"]))
            if (newid == 0) {
              newid = item['id']
            }
            entry = entry + "<li class='selectorbs'><a href=javascript:readMeeting(" + item['id'] + ")>" + item["meetingDate"] + "</a></li>"
          console.log(entry)
        } else {
          // Do not generate an entry
            entry = entry
        }
      });
      entry = entry + '</ul></button>'
      readMeeting(newid)
      $("#meetingdrop").html(entry)
    });
        $.getJSON('/meeting/json?nocache=' + (new Date()).getTime(), null, function(data) {
          console.log('JSON data loaded')
          console.log(data)
          entry = "<tr><th>Date</th><th>Yellow Track</th><th>Green Track</th></tr>"
          $.each(data["meetings"], function(i, item) {
          console.log('Iterating')
          console.log(Date.parse(item["meetingDate"] + ' ' + item["year"]))
          time = item["to"]
          if (time.includes('pm')) {
            time = time.split('pm')[0]
            hour = time.split(':')[0]
            min = time.split(':')[1]
            hour = parseInt(hour) + 12
            time = hour + ":" + min
          } else {
            time = time.split('am')[0]
            hour = time.split(':')[0]
            min = time.split(':')[1]
            time = hour + ":" + min
          }
          if ( Date.now() - Date.parse(item["meetingDate"] +  ' ' +  item["year"] + ' ' + time) <= 0) {
              console.log(item["meetingDate"])
              console.log(time)
              console.log(Date.now() - Date.parse(item["meetingDate"] +  item["year"] + ' ' + time))
                entry = entry + "<tr><td>" + item["meetingDate"] + '</td><td>' + item["basictopic"] + '</td><td>' + item["advtopic"] + '</td></tr>'
              console.log(entry)
            } else {
                entry = entry + "<tr><td><b>✓</b><strike>" + item["meetingDate"] + '</strike></td><td><strike>' + item["basictopic"] + '</strike></td><td><strike>' + item["advtopic"] + '</strike></td></tr>'
            }
          });
          $("#meetingtopics").html(entry)
        });
        fallmode = 0
      }
}
