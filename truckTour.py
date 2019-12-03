from queue import Queue
​
def truckTour(petrolpumps):
    route = Queue()
​
    # put all of the pumps in the queue 
    for p in petrolpumps:
        route.put(p)
​
    start = 0 
    tank = 0
    # keep track of how many pumps we've traversed 
    traversed = 0
​
    # loop over every pair in the input array 
    while traversed < len(petrolpumps):
        # check how much gas is left after traveling to the next pump 
        # at the current pump, keep track of gas - distance 
        pump = route.get()
        gas, distance = pump
        # update our tank amount with the difference between
        # gas and distance 
        tank += (gas - distance)
        # if we see that we have a negative amount of gas left, 
        if tank < 0:
            # that means this pump is not valid 
            # consider the next pump
            start += traversed + 1
            # reset the tank 
            tank = 0
            traversed = 0
        else:
            traversed += 1
        
        # add the pump back to the queue
        route.put(pump)
    
    # return the pump index
    return start
