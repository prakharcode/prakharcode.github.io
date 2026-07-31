// ─────────────────────────────────────────────
//  Personal config — edit this file only
// ─────────────────────────────────────────────
const CONFIG = {

  // ── Terminal identity
  handle : 'prakharcode',
  host   : 'full-stack-data',

  // ── Home page
  name    : { first: 'Prakhar', last: 'Srivastava' },
  tagline : 'Data & AI Engineer · Amsterdam, NL',

  // Wrap words in [text](color) to highlight: green | cyan | amber
  bio: `Building [autonomous AI agents](amber) and [data infrastructure](green)
that scales — from streaming pipelines to medallion architectures.
Deep in [Databricks](cyan), [Spark](cyan), and [BigQuery](cyan).
Lately shipping [agent orchestration](amber) and
[natural-language-to-SQL](amber) bots that kill operational toil.
Speaker at PyCon IT & FR. Open-source contributor. Mechanical keyboard enthusiast.`,

  stats: [
    { val: '6+', label: 'yrs. data eng.'  },
    { val: '60%', label: 'ops toil cut'   },
    { val: '0',  label: 'coffee / day'    },
    { val: '1',  label: 'kbd build' },
  ],

  // ── About page
  about: {
    bio: `Data & AI Engineer based in Amsterdam, currently at Catawiki building autonomous
agent systems. Previously senior data engineer at Tiqets and built data platforms from scratch at TicketSwap.
Background in ML engineering — I crossed over to the software side and now work full-stack across data and AI.
Active Apache Airflow contributor. Delta Lake nerd. I write about this stuff on Substack.`,

    stack: [
      'Apache Spark', 'Delta Lake',   'Databricks',
      'Apache Airflow', 'Python',     'BigQuery',
      'dbt',          'LangGraph',    'MCP Servers',
      'ReAct',        'ChromaDB',     'FastAPI',
      'Kubernetes',   'Terraform',    'AWS / GCP',
    ],

    experience: [
      {
        date    : 'Apr 2026 – Present',
        role    : 'Data & AI Engineer',
        company : 'Catawiki · Amsterdam',
        desc    : 'Built a fully autonomous agent orchestration system that cut operational incidents ~60%. Developing a natural-language-to-SQL bot on BigQuery for self-serve analytics. Reduced pipeline costs 30% while speeding jobs up.',
      },
      {
        date    : 'Jun 2023 – Mar 2026',
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
        date    : 'May 2019 – Oct 2020',
        role    : 'Data & ML Engineer',
        company : 'Atlan Grid · New Delhi',
        desc    : 'Multi-stack Presto on Airflow with a custom Prometheus plugin via Statsd — cut processing from 6h to 2h for 15TB/day, saving customers $4k/month. Earlier: satellite imagery classification (Sentinel-2A, Landsat-8) over the Indian peninsula — 13TB processed, 3.6M geospatial data points.',
      },
    ],
  },

  // ── Links (shown as buttons on home page)
  links: [
    { label: 'LinkedIn',     icon: 'in', url: 'https://linkedin.com/in/prakharcode'  },
    { label: 'GitHub',       icon: '🧑‍💻',  url: 'https://github.com/prakharcode'       },
    { label: 'Substack',     icon: '📚',  url: 'https://substack.com/@prakharcode'    },
    { label: 'Second Brain', icon: '🧠', url: 'https://publish.obsidian.md/prakhar-second-brain/' },
    { label: 'Résumé',       icon: '📄', url: 'Prakhar_Srivastava_CV.pdf', download: true },
  ],
};
