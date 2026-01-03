type Ioptions = {
    page?: number | string;
    limit?: number | string;
    sortOrder?: string;
    sortBy?: string;
}

const paginationSortingHelper = (options: Ioptions)=>{
    console.log(options)
    return options
    // const page = Number
}

export default paginationSortingHelper;