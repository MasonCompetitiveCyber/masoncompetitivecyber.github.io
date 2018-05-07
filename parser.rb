require 'httparty'

data = HTTParty.get('http://api.meetup.com/2/members?key=41374441e6a486d7b5541345b151918&sign=true&group_urlname=Cybersecurity-Innovation-Forum')

count = 0

loop do
    data.parsed_response['results'].each do |member|
      count = count + 1
        unless member['other_services'].nil?
          unless member['other_services']['twitter'].nil?
            puts member['other_services']['twitter']['identifier']
          end
        end
    end
    nexturl = data['meta']['next']
    if nexturl != ""
      data = HTTParty.get(nexturl)
    else
      break
    end
end

puts count
