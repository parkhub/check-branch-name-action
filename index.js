const possibleMatch = process.env.BRANCH.split("_")[0].match(/((?!([A-Z0-9a-z]{1,10})-?$)[A-Z]{1}[A-Z0-9]+-\d+)/g);

if (!possibleMatch) {
    process.exit(1)
} else {
    console.log("Branch name should be formatted like the following PV-345_this_is_a_branch.  Please check your branch name and try again.")
    process.exit(0)
}
