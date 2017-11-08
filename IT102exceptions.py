
a = raw_input()
if a.isdigit():
  a = int(a)
  last = a
  noncompound = a
  for i in range(1,11):
    a = last*1.05
    print "After Year: {}, Compounded Total: {}".format(i,a)
    last = a
else:
  print "Please enter a digit"

