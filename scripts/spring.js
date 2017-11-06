var springmode = 0

function readSpringMeeting(id) {
    $.getJSON('/meeting/spring?nocache=' + (new Date()).getTime(), null, function(data) {
    console.log('JSON data loaded')
    entry = "<button type='button' class='btn btn-primary dropdown-toggle' id='meetingbutton' data-toggle='dropdown'>Click to select meeting<span class='caret'></span></button> <ul class='dropdown-menu' role='menu'>"
    $.each(data["meetings"], function(i, item) {
    if ( id == item['id'] ){
      $('#meetingbutton').html(item['meetingDate']+'<span class=\'caret\'></span>')
      data = 'On Wednesday, ' + item['meetingDate'] + ' basic training will be going over <b>' + item['basictopic'] + '</b> in <b>' + item['location'] + '</b>, whereas advanced will be going over <b>' + item['advtopic'] + '</b> at <b>' + item['advlocation'] + '</b> from 5-6pm.'
      $('#meetingcontent').html(data)
    };

  })})};


function springify(){
  var newid = 0
  if (springmode == 0) {
    springmode = 1
    $.getJSON('/meeting/spring?nocache=' + (new Date()).getTime(), null, function(data) {
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
            entry = entry + "<li class='selectorbs'><a href=javascript:readSpringMeeting(" + item['id'] + ")>" + item["meetingDate"] + "</a></li>"
          console.log(entry)
        } else {
          // Do not generate an entry
            entry = entry
        }
      });
      entry = entry + '</ul></button>'
      readSpringMeeting(newid)
      $("#meetingdrop").html(entry)
    });
        $.getJSON('/meeting/spring?nocache=' + (new Date()).getTime(), null, function(data) {
          console.log('JSON data loaded')
          console.log(data)
          entry = "<tr><th>Date</th><th>Basic Topic</th><th>Advanced Topic</th></tr>"
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
          entry = "<tr><th>Date</th><th>Basic Topic</th><th>Advanced Topic</th></tr>"
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
        springmode = 0
      }
}
