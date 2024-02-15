var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    // First pass: Find potential candidate
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count++;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Second pass: Verify the candidate
    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    // Check if the candidate is the majority element
    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    } else {
        return null; // No majority element
    }
};
