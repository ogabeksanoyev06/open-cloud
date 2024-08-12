import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';
import { useCustomToast } from '~/composables/useCustomToast.js';

export const useCalculatorStore = defineStore(
	'calculator',
	() => {
		const { showToast } = useCustomToast();

		const tab1Configurations = ref([
			{
				id: 1,
				vcpu: 1,
				ram: 16,
				ssdNodes: 16,
				hddNodes: 16,
				publicIP: false,
				price: {
					vcpu_price: 0,
					ram_price: 0,
					ssd_price: 0,
					hdd_price: 0,
					public_ip_price: 0
				}
			}
		]);

		const tab2Configurations = ref([
			{
				id: 1,
				vcpu: 1,
				ram: 16,
				ssdNodes: 16,
				hddNodes: 16,
				publicIP: false,
				price: {
					vcpu_price: 0,
					ram_price: 0,
					ssd_price: 0,
					hdd_price: 0,
					public_ip_price: 0
				}
			}
		]);

		const specification_prices = ref({});

		const getTarifCategories = async () => {
			try {
				let res = await useAxios().getRequest('/calculator/configuration_tarif_categories');
				return res.data;
			} catch (error) {
				console.log(error);
			}
		};

		const getSpecificationPrice = async () => {
			try {
				let res = await useAxios().getRequest('/calculator/specification_prices');
				specification_prices.value = res.data;
				updateConfigurationPrices(tab1Configurations.value);
				updateConfigurationPrices(tab2Configurations.value);
				return res.data;
			} catch (error) {
				console.log(error);
			}
		};

		const updateConfigurationPrices = (configurations) => {
			const prices = specification_prices.value;
			configurations.forEach((config) => {
				config.price = {
					vcpu_price: prices.vcpu_price || 0,
					ram_price: prices.ram_price || 0,
					ssd_price: prices.ssd_price || 0,
					hdd_price: prices.hdd_price || 0,
					public_ip_price: prices.public_ip_price || 0
				};
			});
		};

		const addConfiguration = (tab) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const lastConfig = configurations[configurations.length - 1];
			const newId = lastConfig ? lastConfig.id + 1 : 1;
			const price = specification_prices.value;

			configurations.push({
				id: newId,
				vcpu: 1,
				ram: 16,
				ssdNodes: 16,
				hddNodes: 16,
				publicIP: false,
				price: {
					vcpu_price: price.vcpu_price || 0,
					ram_price: price.ram_price || 0,
					ssd_price: price.ssd_price || 0,
					hdd_price: price.hdd_price || 0,
					public_ip_price: price.public_ip_price || 0
				}
			});
			showToast("Konfiguratsiya qo'shildi", 'success');
		};

		const incrementNodes = (tab, id, type) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const config = configurations.find((conf) => conf.id === id);
			if (config) {
				if (type === 'vcpu') {
					config.vcpu += 1;
				} else if (type === 'ram') {
					config.ram += 16; // RAMni 16GB oshirish
				} else if (type === 'ssd') {
					config.ssdNodes += 16; // SSDni 16GB oshirish
				} else if (type === 'hdd') {
					config.hddNodes += 16; // HDDni 16GB oshirish
				}
			}
		};

		const decrementNodes = (tab, id, type) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const config = configurations.find((conf) => conf.id === id);
			if (config) {
				if (type === 'vcpu' && config.vcpu > 1) {
					config.vcpu -= 1;
				} else if (type === 'ram' && config.ram > 16) {
					// RAM 16GBdan kam bo'lmasligi kerak
					config.ram -= 16;
				} else if (type === 'ssd' && config.ssdNodes > 16) {
					// SSD 16GBdan kam bo'lmasligi kerak
					config.ssdNodes -= 16;
				} else if (type === 'hdd' && config.hddNodes > 16) {
					// HDD 16GBdan kam bo'lmasligi kerak
					config.hddNodes -= 16;
				}
			}
		};

		const deleteConfiguration = (tab, id) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const index = configurations.findIndex((conf) => conf.id === id);
			if (index !== -1) {
				configurations.splice(index, 1);
				showToast("Konfiguratsiya o'chirildi", 'error');
			}
		};

		const deleteAllConfigurations = (tab) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			configurations.length = 0; // Barcha konfiguratsiyalarni o'chirish
		};

		const togglePublicIP = (tab, id) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const config = configurations.find((conf) => conf.id === id);
			if (config) {
				config.publicIP = !config.publicIP;
			}
		};

		// Formatlangan qiymatlar uchun computed properties har bir konfiguratsiya uchun
		const tab1FormattedValues = computed(() => {
			return tab1Configurations.value.map((config) => ({
				ssd: `${config.ssdNodes} GB`,
				hdd: `${config.hddNodes} GB`,
				ram: `${config.ram} GB`,
				vcpu: `${config.vcpu} Nodes`
			}));
		});

		const tab2FormattedValues = computed(() => {
			return {
				ssd: tab2Configurations.value.map((config) => `${config.ssdNodes} GB`),
				hdd: tab2Configurations.value.map((config) => `${config.hddNodes} GB`),
				ram: tab2Configurations.value.map((config) => `${config.ram} GB`),
				vcpu: tab2Configurations.value.map((config) => `${config.vcpu} Nodes`)
			};
		});

		const calculateTotalPriceTab2 = computed(() => {
			const prices = specification_prices.value;
			return tab2Configurations.value.reduce((total, config) => {
				const configPrice =
					config.vcpu * (prices.vcpu_price || 0) +
					config.ram * (prices.ram_price || 0) +
					config.ssdNodes * (prices.ssd_price || 0) +
					config.hddNodes * (prices.hdd_price || 0) +
					(config.publicIP ? prices.public_ip_price || 0 : 0);
				return total + configPrice;
			}, 0);
		});

		return {
			getTarifCategories,
			getSpecificationPrice,
			tab1Configurations,
			tab2Configurations,
			addConfiguration,
			incrementNodes,
			decrementNodes,
			deleteConfiguration,
			togglePublicIP,
			specification_prices,
			tab1FormattedValues,
			tab2FormattedValues,
			deleteAllConfigurations,
			calculateTotalPriceTab2
		};
	},
	{
		persist: {
			storage: persistedState.localStorage
		}
	}
);
