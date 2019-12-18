// https://gist.github.com/seanchen1991/fe7f079f9ce1ad95f3f860d81511e355

'''
input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]
​
input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: [] # since there is no common slot whose duration is 12
​
input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 5
output: [10, 15]
'''
​
def meeting_planner(a_slots, b_slots, dur):
  # find any common time slots that meet the duration
  # find a shared start time and see if it meets the duration criteria
​
  # go through the first array and look at start time 
    # go through the second array and look at start time 
      # trying to find matching start times 
​
  # loop through the first array 
    # add start time to a hash table 
    # add end - start as the corresponding value 
  # loop through the second array 
    # check for any hash key that is start time +/- length 
​
  # establish lowest possible meeting time 
  # find any meeting times that fit in that range 
​
  # O(m * n)
  # for a_slot in a_slots:
  #   for b_slot in b_slots:
  #     # grab the later start time of the two 
  #     start = max(a_slot[0], b_slot[0])
  #     # grab the sooner end time of the two 
  #     end = min(a_slot[1], b_slot[1])
  #     # check if end - start >= duration 
  #     if end - start >= dur:
  #       # return this time range 
  #       return [start, start + dur]
  
  # # return [] 
  # return []
​
  # does the fact that the slots are sorted by start time 
  # allow us to change how we loop through both arrays
​
  # how do we loop through these two arrays more efficiently? 
  # keep an index into each array 
​
  a_index = 0
  b_index = 0
​
  # O(m + n)
  while a_index < len(a_slots) and b_index < len(b_slots):
    start = max(a_slots[a_index][0], b_slots[b_index][0])
    end = min(a_slots[a_index][1], b_slots[b_index][1])
​
    if end - start >= dur:
      return [start, start + dur]
​
    # increment the index corresponding to the slot with the earlier
    # end time 
    if a_slots[a_index][1] < b_slots[b_index][1]:
      a_index += 1
    else:
      b_index += 1
​
  return []
