
total = 0
for i in range(1,12):
  amount = 102 - ( i - 1 ) *9
  print "Slip {} is {}".format(i,102 - ( i - 1 ) *9)
  total += amount

print "Grand total to all slips: {}".format(total)
