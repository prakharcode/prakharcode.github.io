// ─────────────────────────────────────────────
//  Personal config — edit this file only
// ─────────────────────────────────────────────
const CONFIG = {

  // ── Terminal identity
  handle : 'prakharcode',
  host   : 'terminal',

  // ── Home page
  name    : { first: 'Prakhar', last: 'Srivastava' },
  tagline : 'Senior Data Engineer · Amsterdam, NL',

  // Wrap words in [text](color) to highlight: green | cyan | amber
  bio: `Building [data infrastructure](green) that scales — from streaming pipelines
to medallion architectures. Deep in [Databricks](cyan), [Spark](cyan),
and [Delta Lake](cyan). Lately obsessed with
[AI agents](amber), [MCP servers](amber), and making data
engineering feel like magic. Speaker at PyCon IT & FR.
Open-source contributor. Mechanical keyboard enthusiast.`,

  stats: [
    { val: '5+', label: 'yrs. data eng.'  },
    { val: '5',  label: 'PyCon talks'     },
    { val: '0',  label: 'coffee / day'    },
    { val: '1',  label: 'kbd build' },
  ],

  // ── About page
  about: {
    bio: `Senior Data Engineer based in Amsterdam, currently at Tiqets. Previously shaped data
and built data platforms from scratch at TicketSwap. Background in ML engineering — I crossed over to the software side and now becoming full-stack data.
Active Apache Airflow contributor. Delta Lake nerd. I write about this stuff on Substack.`,

    stack: [
      'Apache Spark', 'Delta Lake',  'Databricks',
      'Apache Airflow', 'Python',    'FastAPI',
      'dbt',          'LangGraph',   'ChromaDB',
      'ReAct',        'MCP Servers', 'AWS / GCP',
    ],

    experience: [
      {
        date    : 'Jun 2023 – Present',
        role    : 'Senior Data Engineer',
        company : 'Tiqets · Amsterdam',
        desc    : 'Near real-time EL pipelines on Databricks. Medallion architecture with PySpark & dbt. Unity Catalog migration, data governance framework. Replaced Fivetran with Meltano, saving $4k/month.',
      },
      {
        date    : 'Sep 2021 – May 2023',
        role    : 'Data Engineer',
        company : 'TicketSwap · Amsterdam',
        desc    : 'Built entire data infrastructure from scratch. Real-time analytics on AWS Redshift, data lake on S3 + Glue, Airflow ETL, dbt facts & dims, MLFlow experiment tracking.',
      },
      {
        date    : 'Nov 2020 – Aug 2021',
        role    : 'Data Engineer II',
        company : 'Atlan · Remote',
        desc    : 'Owned Data Lineage — core product feature. Built a source-agnostic lineage scraping framework pushing graphs to Apache Atlas, supporting any SQL dialect.',
      },
      {
        date    : 'Jan 2020 – Oct 2020',
        role    : 'Data Engineer I',
        company : 'Atlan · New Delhi',
        desc    : 'Multi-stack Presto architecture on Airflow. Custom Prometheus plugin via Statsd. Reduced processing time from 6h to 2h for 15TB/day; saved customers $4k/month.',
      },
      {
        date    : 'May 2019 – Dec 2019',
        role    : 'Machine Learning Engineer',
        company : 'Atlan Grid · New Delhi',
        desc    : 'Satellite imagery classification (Sentinel-2A, Landsat-8) over the Indian peninsula. Processed 13TB, generated 3.6M geospatial data points for affluence indicators.',
      },
    ],
  },

  // ── Links (shown as buttons on home page)
  links: [
    { label: 'LinkedIn',     icon: 'in', url: 'https://linkedin.com/in/prakharcode'  },
    { label: 'GitHub',       icon: '🧑‍💻',  url: 'https://github.com/prakharcode'       },
    { label: 'Substack',     icon: '📚',  url: 'https://substack.com/@prakharcode'    },
    { label: 'Second Brain', icon: '🧠', url: 'https://publish.obsidian.md/prakhar-second-brain/' },
  ],
};
