Once again, there's both top-down and bottom-up ways of looking at this problem.

If attempting recursion, it can be very useful to consider multiple ways of shrinking the problem. The amount of change to be made is once variable, what might be another?

For optimizing the recursive strategy, it might be interesting to keep track of how many times you call the function, and with what arguments. Be careful and aggregate the stats, or try this on a smaller problem first to save your console the effort of writing hundreds of thousands of lines.
