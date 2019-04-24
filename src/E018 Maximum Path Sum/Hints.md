This problem can be attacked from either the top or the bottom of the triangle. 

You may be tempted to try a [greedy algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) if working from the top- if one side is larger than the other, try it. This won't work for this problem, as there can be a very large value deeper in the triangle that's only accessible from the "smaller" path.

If you're familiar with treelike data structures, the triangle shape might seem familiar. Both structures have a property of self-similarity that lends well to recursive solutions. Put another way, can we find a smaller, similar subproblem(s) within the original problem?

Remember that recursion needs both a base case and a recursive step, and the recursive step must always make the problem smaller in some manner.
