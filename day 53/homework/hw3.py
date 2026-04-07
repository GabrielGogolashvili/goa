def warn_the_sheep(queue):
    queue.reverse()
    
    if queue[0] == "wolf":
        return "Pls go away and stop eating my sheep"
    
    return "Oi! Sheep number " + str(queue.index("wolf")) + "! You are about to be eaten by a wolf!"