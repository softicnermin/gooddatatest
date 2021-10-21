import React, { useState } from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Insights, Category } from '../md/full'
import Page from "../components/Page";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model";

const filter1 = [newPositiveAttributeFilter(Category, ["Advertising", 'Event', 'Telephone'])];

const Home = () => {
    const [filters, setFilters] = useState(filter1);
    return <Page>
        <InsightView
            insight={Insights.Insight1}
            filters={filters}

        />
        <button onClick={() => setFilters(filter1)}>Filter us</button>
        <button onClick={() => setFilters([])}>clear</button>

    </Page>;
};

export default Home;
